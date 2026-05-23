export interface ExperienceItem {
  area: string;
  description: string;
  bullets: string[];
}

export const experienceAreas: ExperienceItem[] = [
  {
    area: "Business Process Automation",
    description:
      "Designed and implemented automated pipelines that replaced manual workflows, significantly reducing processing time and human error across payroll and HR operations.",
    bullets: [
      "Payroll calculation engines with complex labor law logic",
      "Scheduled batch jobs for mass data processing",
      "Excel report generation via ExcelJS with conditional formatting",
      "Automated email dispatch with PDF attachments",
    ],
  },
  {
    area: "Enterprise API Development",
    description:
      "Built and maintained production REST APIs consumed by internal systems, mobile clients and third-party integrations.",
    bullets: [
      "JWT authentication and role-based access control",
      "Structured middleware pipelines (validation, logging, error handling)",
      "Database abstraction layers and query optimization",
      "Swagger/OpenAPI auto-generated documentation",
    ],
  },
  {
    area: "ERP & Accounting Integrations",
    description:
      "Developed integrations between internal systems and external platforms such as SAP and accounting software, ensuring data consistency and traceability.",
    bullets: [
      "SAP API Cloud connector for payroll synchronization",
      "Accounting journal automation (income, deductions, employer contributions)",
      "Data reconciliation and mismatch detection pipelines",
      "Audit-ready reporting with structured logs",
    ],
  },
  {
    area: "HR & Payroll Systems",
    description:
      "Built core modules for human resources management systems including attendance tracking, shift scheduling, benefits processing and payroll generation.",
    bullets: [
      "Attendance and shift management modules",
      "Benefit and deduction calculation engines",
      "Tax withholding and legal compliance logic",
      "Mass payroll generation with async processing",
    ],
  },
];
