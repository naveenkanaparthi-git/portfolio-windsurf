import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Naveen Kanaparthi
            </Link>
            <Link href="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              NAVEEN KANAPARTHI
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>San Diego, California</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:naveenkanaparthi9@gmail.com" className="hover:text-blue-600">
                  naveenkanaparthi9@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>660-528-1923</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/naveenkanaparthi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  linkedin.com/in/naveenkanaparthi
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Data Engineer with 3+ years of experience designing, building, and maintaining production-grade data pipelines and data infrastructure on modern cloud platforms at scale. Deep expertise in advanced SQL, complex data modeling, Python, PySpark/Spark, Airflow orchestration, streaming platforms, and data warehousing — with a proven DataOps mindset focused on data integrity, monitoring, and enabling a data-first culture. Strong cross-functional partner who translates complex requirements into scalable, reliable data products that drive strategic decision-making.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Languages & Core:</span> Python (3+ yrs), SQL (3+ yrs), PySpark/Apache Spark (2+ yrs), Bash, JavaScript/TypeScript
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Data Platform & Warehousing:</span> Databricks Lakehouse (Bronze/Silver/Gold), Delta Lake, BigQuery, Structured Streaming, Snowflake-style marts, Unity Catalog, Databricks SQL
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Transformation, Modeling & Quality:</span> Kimball dimensional modeling, Star/Snowflake schemas, dbt (Core), Data contracts, Schema enforcement, Soda (Core/Cloud), Great Expectations, Anomaly detection, SLA monitoring
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Orchestration, DevOps & Cloud:</span> Apache Airflow, Dagster, Docker, Kubernetes, GitHub Actions, GitLab CI, Terraform, AWS (S3, EC2, IAM, Glue, Athena, Lambda, EMR, CloudWatch), GCP (BigQuery, Cloud Storage), Azure (Databricks, Data Factory, Synapse)
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Databases & Storage:</span> PostgreSQL, Oracle, SQL Server, MySQL, MongoDB, DynamoDB, Cassandra, Delta Lake
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Qualcomm Inc */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Engineer</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">September 2024 – Present</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                Qualcomm Inc. (via TCS) — San Diego, CA
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Own end-to-end data pipelines feeding executive-level operational dashboards, designing ingestion, transformation, and serving layers in Python, SQL, dbt, and BigQuery with automated Airflow orchestration.</li>
                <li>Designed and refined Kimball dimensional data models — conformed dimensions and fact tables — powering company-wide reporting and self-serve analytics for cross-functional stakeholders.</li>
                <li>Implemented robust data integrity monitoring with Soda checks, dbt tests, and schema enforcement at ingestion boundaries; reduced production data incidents and ensured SLA compliance for business-critical datasets.</li>
                <li>Optimized BigQuery SQL and data models with partitioning, clustering, and cost-management techniques, improving query performance and cutting compute spend at scale.</li>
                <li>Containerized data pipeline workloads with Docker and deployed via CI/CD workflows; established monitoring, alerting, and incident-response runbooks ensuring high availability.</li>
              </ul>
            </div>

            {/* Apple Inc */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full-Stack Data Engineer / Databricks Developer</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">November 2023 – August 2024</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                Apple Inc. (via TCS) — Cupertino, CA
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Architected end-to-end Databricks Lakehouse infrastructure on the Medallion pattern with Delta Lake and Unity Catalog governance, transforming data at scale for enterprise analytics and AI/ML workloads.</li>
                <li>Built and optimized scalable ETL/ELT data pipelines on Databricks and AWS processing petabyte-scale datasets, performance-tuning Spark and reducing compute cost via efficient resource utilization.</li>
                <li>Established data quality and reliability frameworks with automated validation, schema enforcement, anomaly detection, and monitoring; supported root-cause analysis and on-call production operations.</li>
                <li>Implemented DataOps best practices: Git-based version control, CI/CD pipelines for automated deployment, Docker/containerized workloads, and infrastructure-as-code for reliable releases.</li>
                <li>Partnered cross-functionally with data science, BI, and engineering teams to define data consumption patterns and deliver governed data products enabling company-wide insights.</li>
              </ul>
            </div>

            {/* Fisher Investments Inc */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Engineer Associate</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">January 2023 – November 2023</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                Fisher Investments Inc. — Remote
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Developed ETL data pipelines extracting, transforming, and loading data from enterprise systems using Python, SQL, and Airflow-based workflow orchestration, supporting analytics and BI workloads.</li>
                <li>Implemented data validation frameworks and data integrity checks ensuring accuracy and consistency for reporting and downstream analytical applications.</li>
                <li>Optimized database queries and data models, improving processing performance and enabling efficient delivery of curated datasets to business stakeholders.</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
              KEY PROJECTS & TECHNICAL ACHIEVEMENTS
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Real-Time Streaming & AI/ML Data Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Built production streaming data pipeline using Structured Streaming over Kafka events with feature engineering frameworks, real-time analytics dashboards, and ML model serving.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <span className="font-semibold">Technologies:</span> Databricks Structured Streaming, PySpark, Kafka, Python, FastAPI, scikit-learn, MLflow
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
              EDUCATION
            </h2>
            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Science in Applied Computer Science</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">August 2021 – December 2022</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Northwest Missouri State University • GPA 3.7 / 4.0
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science and Engineering</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">August 2016 – September 2020</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Jawaharlal Nehru Technological University • GPA 3.4 / 4.0
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
              CERTIFICATIONS
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Microsoft Certified: Azure AI Engineer Associate — 2025</li>
              <li>Databricks Academy – Azure Databricks Platform Architect — August 2025 — ID: 157352478</li>
              <li>Databricks Academy – Databricks Fundamentals — July 2025 — ID: 154542362</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
