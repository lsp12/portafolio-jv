export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "enterprise-api",
    title: "Enterprise REST API",
    description:
      "Modular REST API with JWT authentication, role-based access control, input validation, Swagger documentation, and clean layered architecture.",
    longDescription:
      "Production-grade API built with Node.js and Express following clean architecture principles. Implements multi-tier RBAC, full Swagger documentation, request validation middleware, and structured error handling.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    highlights: [
      "JWT authentication with refresh tokens",
      "Role-based access control",
      "Auto-generated Swagger docs",
      "Layered architecture (routes → controllers → services → repositories)",
    ],
    featured: true,
  },
  {
    id: "bi-dashboard",
    title: "Business Intelligence Dashboard",
    description:
      "Interactive dashboard for enterprise KPI tracking with real-time charts, advanced filters, Excel export and key business indicators.",
    longDescription:
      "Full-stack dashboard designed for enterprise reporting needs. Features interactive Recharts visualizations, multi-dimensional filtering, paginated data tables and Excel report generation.",
    tags: ["React", "Recharts", "Tailwind CSS", "Node.js", "ExcelJS"],
    highlights: [
      "Real-time KPI charts and trend analysis",
      "Multi-criteria filtering engine",
      "One-click Excel report export",
      "Responsive layout optimized for large datasets",
    ],
    featured: true,
  },
  {
    id: "excel-automation",
    title: "Excel → API Automation Tool",
    description:
      "Enterprise automation tool that processes Excel files, validates structured data, and generates formatted reports via REST API.",
    longDescription:
      "Internal tool used to streamline data ingestion from Excel files into backend systems. Handles bulk uploads, schema validation, transformation pipelines and generates audit logs.",
    tags: ["Node.js", "ExcelJS", "Express", "SQL Server", "PM2"],
    highlights: [
      "Batch Excel file processing",
      "Schema-level data validation",
      "Automated report generation",
      "Structured audit logs per execution",
    ],
    featured: true,
  },
  {
    id: "admin-system",
    title: "Administrative Management System",
    description:
      "Internal admin panel with authentication, user management, role assignment, CRUD modules, dynamic filters and control dashboard.",
    longDescription:
      "Full-stack administrative system built for internal operations management. Includes user sessions, role management, data tables with filtering, and a metrics dashboard.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    highlights: [
      "Session-based authentication system",
      "Granular role and permission management",
      "CRUD modules with server-side pagination",
      "Admin metrics and activity dashboard",
    ],
    featured: false,
  },
];
