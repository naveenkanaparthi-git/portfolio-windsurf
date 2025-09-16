'use client';

import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
  type: 'databricks' | 'linkedin' | 'other';
  skills: string[];
}

interface CertificationsSectionProps {
  className?: string;
}

export default function CertificationsSection({ className = '' }: CertificationsSectionProps) {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks',
      date: '2024',
      credentialUrl: 'https://credentials.databricks.com/4df368a0-eb5e-4cd9-b8e8-5e23329125c9#acc.1RwAgrjZ',
      description: 'Demonstrates proficiency in building and managing data pipelines using Databricks platform',
      type: 'databricks',
      skills: ['Apache Spark', 'Delta Lake', 'ETL Pipelines', 'Data Engineering']
    },
    {
      id: '2',
      title: 'Databricks Certified Associate Developer for Apache Spark',
      issuer: 'Databricks',
      date: '2024',
      credentialUrl: 'https://credentials.databricks.com/251fa960-08a8-41d6-943d-f537bb5a94d6#acc.jdWHixqL',
      description: 'Validates skills in developing applications using Apache Spark on Databricks',
      type: 'databricks',
      skills: ['Apache Spark', 'PySpark', 'Scala', 'Data Processing']
    },
    {
      id: '3',
      title: 'Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      date: '2024',
      credentialUrl: 'https://credentials.databricks.com/a609f5d4-1f28-45ac-a995-b81abd10847b',
      description: 'Foundational knowledge of Databricks Lakehouse architecture and concepts',
      type: 'databricks',
      skills: ['Lakehouse Architecture', 'Delta Lake', 'Unity Catalog', 'Data Governance']
    },
    {
      id: '4',
      title: 'Advanced Data Engineering Certification',
      issuer: 'LinkedIn Learning',
      date: '2024',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/c469cf454fd8f6d704cd396357f5d5bafb94d4ae8928145d47a186f42fa2ffdb',
      description: 'Advanced concepts in data engineering, pipeline optimization, and best practices',
      type: 'linkedin',
      skills: ['Data Pipeline Design', 'Performance Optimization', 'Data Quality', 'Monitoring']
    },
    {
      id: '5',
      title: 'Cloud Data Engineering Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2024',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/b4aa14cb0d531274cf6ad0d332c3a45861c86889f0e3eb9f640d3da84928f393',
      description: 'Comprehensive understanding of cloud-based data engineering solutions and architectures',
      type: 'linkedin',
      skills: ['Cloud Architecture', 'AWS/GCP', 'Serverless Computing', 'Data Lakes']
    }
  ];

  const getIssuerLogo = (type: string) => {
    switch (type) {
      case 'databricks':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">DB</span>
          </div>
        );
      case 'linkedin':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">in</span>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
        );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'databricks':
        return 'from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border-red-200/50 dark:border-red-700/50 text-red-700 dark:text-red-300';
      case 'linkedin':
        return 'from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-blue-200/50 dark:border-blue-700/50 text-blue-700 dark:text-blue-300';
      default:
        return 'from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in data engineering, cloud platforms, and modern data technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white dark:hover:bg-gray-800"
            >
              <div className="flex items-start gap-4 mb-4">
                {getIssuerLogo(cert.type)}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 transform hover:scale-110"
                  aria-label="View Credential"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={12} />
                <span>Earned {cert.date}</span>
                <CheckCircle size={12} className="text-green-500 ml-2" />
                <span className="text-green-600 dark:text-green-400 font-medium">Verified</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${getTypeColor(cert.type)} rounded-full border`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {certifications.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Total Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {certifications.filter(c => c.type === 'databricks').length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Databricks Credentials
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {new Set(certifications.flatMap(c => c.skills)).size}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Validated Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
