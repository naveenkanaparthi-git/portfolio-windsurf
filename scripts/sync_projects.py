#!/usr/bin/env python3
"""Sync NEXUS project log to portfolio projects_data.json — portfolio projects only"""
import json
import os
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

GITHUB_TOKEN = os.environ.get("AGENT_GITHUB_TOKEN", "")
PROJECT_LOG_URL = "https://raw.githubusercontent.com/naveenkanaparthi-git/portfolio-agent/main/agent_state/project_log.json"
OUTPUT_FILE = Path("public/projects_data.json")

# Exclude agent/infra repos — only genuine data engineering projects
EXCLUDED_PATTERNS = [
    "-agent", "portfolio-agent", "portfolio-windsurf", "career-ops",
    "cypher", "hermes", "herald", "oracle", "radar", "apollo", "nexus", "guardian",
]

CATEGORY_MAP = {
    "Real-time streaming": "Real-time Streaming",
    "Batch ETL": "Batch ETL/ELT",
    "ML feature": "ML/Feature Engineering",
    "LLM": "AI/ML — LLM-Powered",
    "Data quality": "Data Quality",
    "Cloud-native": "Cloud Data",
    "Vector": "Vector DB / RAG",
    "Data lakehouse": "Lakehouse",
    "AutoML": "AutoML / MLflow",
    "AI agent": "AI Agents",
}

def map_category(raw: str) -> str:
    for key, val in CATEGORY_MAP.items():
        if key.lower() in raw.lower():
            return val
    return raw.split("—")[0].strip() if "—" in raw else raw

def is_portfolio_project(repo_name: str) -> bool:
    name_lower = repo_name.lower()
    for pattern in EXCLUDED_PATTERNS:
        if pattern in name_lower:
            return False
    return True

def fetch_project_log() -> list:
    req = urllib.request.Request(
        PROJECT_LOG_URL,
        headers={"Authorization": f"token {GITHUB_TOKEN}"} if GITHUB_TOKEN else {}
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

def transform_project(p: dict, idx: int) -> dict:
    repo_name = p.get("repo_name", "")
    return {
        "id": repo_name,
        "name": repo_name.replace("-", " ").title(),
        "repo_name": repo_name,
        "description": p.get("summary", "")[:300],
        "github_url": p.get("github_url", f"https://github.com/naveenkanaparthi-git/{repo_name}"),
        "category": map_category(p.get("category", "Data Engineering")),
        "tech_stack": p.get("tech_stack", []),
        "date": p.get("generated_at", "")[:10],
        "built_by_nexus": True,
        "wow_factor": min(10, 7 + (p.get("tests_passed", 0) // 20)),
        "summary": p.get("summary", "")[:150],
    }

def main():
    print("Fetching NEXUS project log...")
    try:
        log = fetch_project_log()
        print(f"Found {len(log)} entries in project log")
    except Exception as e:
        print(f"Failed to fetch: {e}")
        log = []

    # Filter to portfolio-only projects (exclude agent infrastructure repos)
    portfolio = [p for p in log if is_portfolio_project(p.get("repo_name", ""))]
    skipped = len(log) - len(portfolio)
    if skipped:
        print(f"Filtered out {skipped} agent/infra repos, keeping {len(portfolio)} portfolio projects")

    projects = [transform_project(p, i) for i, p in enumerate(portfolio)]
    projects.sort(key=lambda x: x["date"], reverse=True)

    data = {
        "last_updated": datetime.now(timezone.utc).isoformat(),
        "total_projects": len(projects),
        "projects": projects,
    }

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(json.dumps(data, indent=2))
    print(f"Written {len(projects)} portfolio projects to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
