export const projectMeta = {
  name: "MegaMan - Jesús Barros Platform",
  description: "Plataforma personal integral que combina presencia pública (marca personal, conocimiento, rutas de estudio) con un ecosistema privado de gestión de vida (finanzas, salud física, dispositivos, bienestar mental, notificaciones inteligentes).",
  author: "Jesús Barros",
  strategy: "Monorepo Práctico - Un solo repositorio, dos mundos separados por rutas",
  publicUrl: "jesusbarros.com/",
  privateUrl: "jesusbarros.com/dashboard",
  stack: {
    frontend: "Next.js 14 (App Router)",
    styles: "TailwindCSS",
    auth: "NextAuth.js (credenciales propias)",
    database: "PostgreSQL (Supabase)",
    orm: "Prisma",
    pwa: "next-pwa",
    notifications: "Web Push API + Vercel Cron",
    calendar: "Google Calendar API",
    deploy: "Vercel",
    ai: "Anthropic API / OpenAI API (futuro)",
    wearables: "Apple HealthKit / Google Fit SDK (futuro)"
  }
};

// Layout configuration
// Column 1 (x=50): Fase 1 - Rutas de Estudio
// Column 2 (x=350): Fase 2 - Marca Personal
// Column 3 (x=650): Fase 3 - Dashboard (Finanzas)
// Column 4 (x=950): Fase 3 - Dashboard (Salud)
// Column 5 (x=1250): Fase 3 - Dashboard (Dispositivos/Documentos)
// Column 6 (x=1550): Fase 4 - Hábitos y Notificaciones
// Row 0 (y=50): Headers de módulos principales
// Rows 1-4 (y=200-650): Sub-módulos/detalle
// Row 5 (y=800): Infraestructura/Servicios

export const nodes = [
  // ===== FASE 1 - RUTAS DE ESTUDIO (PÚBLICA - PRIORIDAD 1) =====
  // Column 1: x=50
  
  // ===== NOTAS Y ESPECIFICACIONES =====
  
  // Stack Tecnológico - Nota técnica
  {
    id: "tech-stack",
    type: "NOTE",
    position: { x: 200, y: -250 },
    data: {
      label: "Stack Tecnológico",
      description: "Stack tecnológico completo para el proyecto MegaMan.",
      fields: [
        { name: "Frontend", type: "Next.js 14 (App Router)" },
        { name: "Lenguaje", type: "TypeScript" },
        { name: "Estilos", type: "TailwindCSS" },
        { name: "Auth", type: "NextAuth.js (credenciales)" },
        { name: "Database", type: "PostgreSQL (Supabase)" },
        { name: "ORM", type: "Prisma" },
        { name: "PWA", type: "next-pwa" },
        { name: "Notificaciones", type: "Web Push API + Vercel Cron" },
        { name: "Calendario", type: "Google Calendar API" },
        { name: "Deploy", type: "Vercel" },
        { name: "AI (futuro)", type: "Anthropic / OpenAI API" },
        { name: "Wearables (futuro)", type: "HealthKit / Google Fit SDK" }
      ],
      priority: 0,
      phase: 0,
      zone: "core"
    },
  },
  
  // Guía de Estilo - Nota de diseño
  {
    id: "style-guide",
    type: "NOTE",
    position: { x: 500, y: -250 },
    data: {
      label: "Guía de Estilo",
      description: "Paleta de colores y principios de diseño para MegaMan.",
      fields: [
        { name: "Base", type: "Negro elegante (#0a0a0a)" },
        { name: "Acento 1", type: "Plateado sutil (#c0c0c0)" },
        { name: "Acento 2", type: "Azul metalizado (#4a90a4)" },
        { name: "Texto", type: "Gris claro (#e5e5e5)" },
        { name: "Bordes", type: "Gris medio (#4a4a4a)" }
      ],
      items: [
        "Diseño moderno y minimalista",
        "Uso sutil de plateado y azul metalizado",
        "Fondos oscuros predominantes",
        "Tipografía limpia y legible",
        "Espaciado generoso entre elementos",
        "Transiciones suaves y elegantes"
      ],
      priority: 0,
      phase: 0,
      zone: "core"
    },
  },
  
  // Landing Page - Maqueta
  {
    id: "landing",
    type: "MOCKUP",
    position: { x: 350, y: -50 },
    data: {
      label: "Landing Page",
      description: "Página de inicio que conecta todos los módulos del proyecto.",
      sections: [
        { 
          name: "Hero / Biografía", 
          description: "Breve biografía de Jesús Barros",
          cta: "Ver perfil completo →"
        },
        { 
          name: "Últimas Entradas", 
          description: "Preview de contenido reciente de la bitácora técnica",
          cta: "Explorar bitácora →"
        },
        { 
          name: "Perfil Profesional", 
          description: "Resumen de experiencia y habilidades",
          cta: "Ver experiencia →"
        },
        { 
          name: "Call to Actions", 
          description: "Enlaces a módulos principales",
          cta: "Navegar por secciones →"
        }
      ],
      fields: [
        { name: "Tipo", type: "Página de inicio" },
        { name: "Ruta", type: "/" },
        { name: "Estilo", type: "Elegante + Moderno" }
      ],
      priority: 0,
      phase: 0,
      zone: "core"
    },
  },
  
  // Bitácora Pública - Módulo principal
  {
    id: "learning-paths",
    type: "MODULE",
    position: { x: 50, y: 50 },
    data: {
      label: "Bitácora Pública",
      description: "Bitácora técnica pública: material de estudio, papers, documentación de proyectos y exploraciones.",
      fields: [
        { name: "id", type: "string (slug)" },
        { name: "title", type: "string" },
        { name: "description", type: "text" },
        { name: "type", type: "enum(study, project, paper, exploration)" },
        { name: "category", type: "enum(dev, ai, systems, entrepreneurship, personal)" },
        { name: "status", type: "enum(active, completed, archived, draft)" },
        { name: "level", type: "enum(beginner, intermediate, advanced)" },
        { name: "coverImage", type: "string" },
        { name: "isPublished", type: "boolean" },
        { name: "publishedAt", type: "date" },
        { name: "updatedAt", type: "date" },
      ],
      dataSource: "JSON estático en /data/logbook/",
      priority: 1,
      phase: 1,
      url: "/bitacora",
      zone: "public"
    },
  },
  
  // Categorías de Contenido
  {
    id: "category-software",
    type: "MODULE",
    position: { x: -200, y: 250 },
    data: {
      label: "Desarrollo de Software",
      description: "Técnico Laboral en Programación y Desarrollo de Software",
      items: [
        "Lógica de Programación",
        "Fundamentos de Python",
        "Control de Versiones con Git",
        "Desarrollo Web Frontend",
        "Desarrollo Web Backend",
        "Bases de Datos",
        "Proyecto Integrador de Desarrollo"
      ],
      dataSource: "JSON estático",
      priority: 1,
      phase: 1,
      zone: "public"
    },
  },
  {
    id: "category-ai",
    type: "MODULE",
    position: { x: 50, y: 250 },
    data: {
      label: "Inteligencia Artificial",
      description: "Papers, experimentos y documentación sobre IA y sistemas inteligentes",
      items: [
        "Experimentos con LLMs",
        "Arquitectura de Agentes",
        "Fine-tuning y RAG",
        "Proyectos de IA aplicada"
      ],
      dataSource: "JSON estático",
      priority: 1,
      phase: 1,
      zone: "public"
    },
  },
  {
    id: "category-projects",
    type: "MODULE",
    position: { x: 300, y: 250 },
    data: {
      label: "Proyectos en Desarrollo",
      description: "Documentación técnica de proyectos personales y emprendimientos",
      items: [
        "MegaMan Platform",
        "Herramientas de Productividad",
        "Experimentos técnicos",
        "Open Source contributions"
      ],
      dataSource: "JSON estático",
      priority: 1,
      phase: 1,
      zone: "public"
    },
  },
  
  // Entradas individuales
  {
    id: "lessons",
    type: "MODULE",
    position: { x: 50, y: 450 },
    data: {
      label: "Entradas",
      description: "Entradas individuales de la bitácora: lecciones, papers, documentación. Cargadas desde JSON.",
      fields: [
        { name: "id", type: "string" },
        { name: "logbookId", type: "string → Bitácora" },
        { name: "title", type: "string" },
        { name: "type", type: "enum(article, video, paper, doc, note, code)" },
        { name: "url", type: "string" },
        { name: "duration", type: "integer (minutos)" },
        { name: "order", type: "integer" },
        { name: "isPublished", type: "boolean" },
        { name: "content", type: "markdown | string" },
        { name: "tags", type: "string[]" },
      ],
      dataSource: "JSON estático",
      priority: 1,
      phase: 1,
      zone: "public"
    },
  },

  // ===== FASE 2 - MARCA PERSONAL (PÚBLICA - PRIORIDAD 2) =====
  // Column 2: x=350
  {
    id: "profile",
    type: "MODULE",
    position: { x: 350, y: 50 },
    data: {
      label: "Perfil Público",
      description: "Información personal y profesional pública.",
      fields: [
        { name: "nombre", type: "string" },
        { name: "tagline", type: "string" },
        { name: "bio", type: "text" },
        { name: "photoUrl", type: "string" },
        { name: "email", type: "string" },
        { name: "socialLinks", type: "JSON { linkedin, github, instagram, youtube }" },
      ],
      priority: 2,
      phase: 2,
      url: "/",
      zone: "public"
    },
  },
  {
    id: "experience",
    type: "MODULE",
    position: { x: 350, y: 280 },
    data: {
      label: "Experiencia",
      description: "Timeline de experiencia laboral y académica.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "company", type: "string" },
        { name: "role", type: "string" },
        { name: "startDate", type: "date" },
        { name: "endDate", type: "date | null" },
        { name: "description", type: "text" },
        { name: "type", type: "enum(work, education, volunteer)" },
      ],
      priority: 2,
      phase: 2,
      url: "/experiencia",
      zone: "public"
    },
  },
  {
    id: "skills",
    type: "MODULE",
    position: { x: 350, y: 510 },
    data: {
      label: "Habilidades",
      description: "Mapa visual de conocimientos y tecnologías.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "name", type: "string" },
        { name: "category", type: "string" },
        { name: "level", type: "integer (1-5)" },
        { name: "icon", type: "string" },
      ],
      priority: 2,
      phase: 2,
      url: "/habilidades",
      zone: "public"
    },
  },
  
  // ===== FASE 3 - PORTAFOLIO DE PROYECTOS (PÚBLICA) =====
  // Column 3: x=650
  {
    id: "projects",
    type: "MODULE",
    position: { x: 650, y: 50 },
    data: {
      label: "Proyectos",
      description: "Portafolio de proyectos desarrollados con información detallada y colaboradores.",
      fields: [
        { name: "id", type: "string (slug)" },
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "description", type: "text" },
        { name: "shortDescription", type: "string" },
        { name: "projectUrl", type: "string" },
        { name: "icon", type: "string" },
        { name: "startDate", type: "date" },
        { name: "endDate", type: "date | null" },
        { name: "status", type: "enum(active, completed, archived)" },
        { name: "company", type: "string | null" },
        { name: "collaborators", type: "Collaborator[]" },
        { name: "technologies", type: "string[]" },
        { name: "isPublished", type: "boolean" },
      ],
      priority: 2,
      phase: 2,
      url: "/proyectos",
      zone: "public"
    },
  },
  {
    id: "project-detail",
    type: "MODULE",
    position: { x: 650, y: 350 },
    data: {
      label: "Detalle de Proyecto",
      description: "Vista individual de cada proyecto con toda su información.",
      fields: [
        { name: "id", type: "string" },
        { name: "projectId", type: "string → Project" },
        { name: "gallery", type: "string[]" },
        { name: "readme", type: "markdown" },
        { name: "challenges", type: "text" },
        { name: "results", type: "text" },
      ],
      priority: 2,
      phase: 2,
      zone: "public"
    },
  },

  // ===== FASE 3 - DASHBOARD PRIVADO CORE (PRIORIDAD 3) =====
  // Column 3: x=650 - FINANZAS
  {
    id: "finances",
    type: "MODULE",
    position: { x: 650, y: 50 },
    data: {
      label: "Gestión Financiera",
      description: "Seguimiento de ingresos, gastos y deudas.",
      priority: 3,
      phase: 3,
      url: "/dashboard/finanzas",
      zone: "private",
      views: ["Resumen mensual", "Balance neto", "Gráfica de gastos por categoría", "Lista de deudas activas"]
    },
  },
  {
    id: "income",
    type: "MODULE",
    position: { x: 650, y: 220 },
    data: {
      label: "Ingresos",
      description: "Registro de ingresos personales.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "amount", type: "float" },
        { name: "currency", type: "string" },
        { name: "source", type: "string" },
        { name: "date", type: "date" },
        { name: "category", type: "string" },
        { name: "notes", type: "text" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },
  {
    id: "expense",
    type: "MODULE",
    position: { x: 650, y: 420 },
    data: {
      label: "Gastos",
      description: "Registro de egresos y gastos.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "amount", type: "float" },
        { name: "currency", type: "string" },
        { name: "merchant", type: "string" },
        { name: "date", type: "date" },
        { name: "category", type: "enum(food, transport, subscriptions, health, entertainment, other)" },
        { name: "notes", type: "text" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },
  {
    id: "debt",
    type: "MODULE",
    position: { x: 650, y: 620 },
    data: {
      label: "Deudas",
      description: "Seguimiento de deudas y préstamos.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "creditor", type: "string" },
        { name: "totalAmount", type: "float" },
        { name: "remainingAmount", type: "float" },
        { name: "interestRate", type: "float" },
        { name: "dueDate", type: "date" },
        { name: "isPaid", type: "boolean" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },

  // Column 4: x=950 - SALUD Y BIENESTAR
  {
    id: "health",
    type: "MODULE",
    position: { x: 950, y: 50 },
    data: {
      label: "Salud y Bienestar",
      description: "Seguimiento de salud física, nutrición y sueño.",
      priority: 3,
      phase: 3,
      url: "/dashboard/fisico",
      zone: "private",
      views: ["Gráfica de peso en el tiempo", "Promedio de calorías/semana", "Tendencia de sueño", "Racha de gym"]
    },
  },
  {
    id: "body-record",
    type: "MODULE",
    position: { x: 950, y: 220 },
    data: {
      label: "Body Record",
      description: "Registro de medidas corporales.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "date", type: "date" },
        { name: "weight", type: "float (kg)" },
        { name: "bodyFatPercentage", type: "float (opcional)" },
        { name: "muscleMass", type: "float (opcional)" },
        { name: "notes", type: "text" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },
  {
    id: "nutrition-log",
    type: "MODULE",
    position: { x: 950, y: 420 },
    data: {
      label: "Nutrition Log",
      description: "Registro diario de nutrición.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "date", type: "date" },
        { name: "calories", type: "integer" },
        { name: "protein", type: "float (g)" },
        { name: "carbs", type: "float (g)" },
        { name: "fat", type: "float (g)" },
        { name: "meal", type: "enum(breakfast, lunch, dinner, snack)" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },
  {
    id: "sleep-record",
    type: "MODULE",
    position: { x: 950, y: 620 },
    data: {
      label: "Sleep Record",
      description: "Seguimiento de calidad de sueño.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "date", type: "date" },
        { name: "hoursSlept", type: "float" },
        { name: "quality", type: "integer (1-5)" },
        { name: "bedtime", type: "time" },
        { name: "wakeTime", type: "time" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },
  {
    id: "workout-log",
    type: "MODULE",
    position: { x: 950, y: 820 },
    data: {
      label: "Workout Log",
      description: "Registro de entrenamientos.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "date", type: "date" },
        { name: "type", type: "string" },
        { name: "durationMinutes", type: "integer" },
        { name: "gym", type: "boolean" },
        { name: "notes", type: "text" },
      ],
      priority: 3,
      phase: 3,
      zone: "private"
    },
  },

  // Column 5: x=1250 - DISPOSITIVOS Y DOCUMENTOS
  {
    id: "devices",
    type: "MODULE",
    position: { x: 1250, y: 50 },
    data: {
      label: "Gestión de Dispositivos",
      description: "Inventario y mantenimiento de dispositivos personales.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "name", type: "string" },
        { name: "brand", type: "string" },
        { name: "model", type: "string" },
        { name: "category", type: "enum(electronics, appliance, vehicle, other)" },
        { name: "purchaseDate", type: "date" },
        { name: "purchasePrice", type: "float" },
        { name: "warrantyUntil", type: "date" },
        { name: "usefulLifeYears", type: "integer" },
        { name: "nextMaintenance", type: "date" },
        { name: "status", type: "enum(active, repair, retired)" },
        { name: "notes", type: "text" },
        { name: "photo", type: "string" },
      ],
      priority: 3,
      phase: 3,
      url: "/dashboard/dispositivos",
      zone: "private",
      views: ["Lista de dispositivos activos", "Alertas de mantenimiento próximo", "Dispositivos en garantía", "Valor total del inventario"]
    },
  },
  {
    id: "documents",
    type: "MODULE",
    position: { x: 1250, y: 400 },
    data: {
      label: "Documentos y Certificados",
      description: "Gestión de CV privado y certificaciones.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "title", type: "string" },
        { name: "type", type: "enum(certificate, id, contract, diploma, other)" },
        { name: "fileUrl", type: "string" },
        { name: "issueDate", type: "date" },
        { name: "expiryDate", type: "date | null" },
        { name: "issuer", type: "string" },
        { name: "tags", type: "string[]" },
      ],
      priority: 3,
      phase: 3,
      url: "/dashboard/documentos",
      zone: "private"
    },
  },

  // ===== FASE 4 - BIENESTAR Y NOTIFICACIONES (PRIORIDAD 4) =====
  // Column 6: x=1550 - HÁBITOS Y NOTIFICACIONES
  {
    id: "habits",
    type: "MODULE",
    position: { x: 1550, y: 50 },
    data: {
      label: "Seguimiento de Hábitos",
      description: "Gestión de hábitos y seguimiento de progreso.",
      priority: 4,
      phase: 4,
      url: "/dashboard/habitos",
      zone: "private",
      examples: [
        "Salir con mis padres → recordar cada 15 días",
        "Ir al gym → recordar si no hay registro en 2 días",
        "Hora de dormir → recordar a las 10:30pm si no hay SleepRecord"
      ]
    },
  },
  {
    id: "habit-template",
    type: "MODULE",
    position: { x: 1550, y: 250 },
    data: {
      label: "Habit Template",
      description: "Plantillas de hábitos recurrentes.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "title", type: "string" },
        { name: "description", type: "text" },
        { name: "category", type: "enum(social, health, rest, productivity, fun)" },
        { name: "frequencyDays", type: "integer" },
        { name: "lastCompletedAt", type: "datetime | null" },
        { name: "isActive", type: "boolean" },
      ],
      priority: 4,
      phase: 4,
      zone: "private"
    },
  },
  {
    id: "habit-log",
    type: "MODULE",
    position: { x: 1550, y: 450 },
    data: {
      label: "Habit Log",
      description: "Registro de completitud de hábitos.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "habitId", type: "UUID → HabitTemplate" },
        { name: "completedAt", type: "datetime" },
        { name: "notes", type: "text" },
        { name: "mood", type: "integer (1-5)" },
      ],
      priority: 4,
      phase: 4,
      zone: "private"
    },
  },
  {
    id: "notifications",
    type: "SERVICE",
    position: { x: 1550, y: 620 },
    data: {
      label: "Sistema de Notificaciones",
      description: "Notificaciones push y recordatorios inteligentes.",
      priority: 4,
      phase: 4,
      url: "/dashboard/notificaciones",
      zone: "private",
      logic: [
        "Cron job cada hora (Vercel Cron) evalúa notificaciones",
        "Check → marca hábito completado + opción Calendar",
        "Snooze → reprogramar en X horas"
      ]
    },
  },
  {
    id: "notification",
    type: "MODULE",
    position: { x: 1550, y: 800 },
    data: {
      label: "Notification",
      description: "Entidad de notificación.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "title", type: "string" },
        { name: "body", type: "text" },
        { name: "type", type: "enum(habit_reminder, maintenance_alert, finance_alert, sleep_reminder, custom)" },
        { name: "scheduledAt", type: "datetime" },
        { name: "sentAt", type: "datetime | null" },
        { name: "isRead", type: "boolean" },
        { name: "actionType", type: "enum(check, snooze, schedule_calendar, none)" },
        { name: "calendarEventId", type: "string | null" },
        { name: "habitId", type: "UUID | null" },
      ],
      priority: 4,
      phase: 4,
      zone: "private"
    },
  },

  // ===== SERVICIOS E INTEGRACIONES (CAPA TÉCNICA) =====
  // Row inferior: y=1000 - Infraestructura
  {
    id: "auth",
    type: "SERVICE",
    position: { x: 50, y: 1000 },
    data: {
      label: "Autenticación",
      description: "NextAuth.js con credenciales propias.",
      priority: 1,
      phase: 1,
      tech: "NextAuth.js",
      zone: "infrastructure"
    },
  },
  {
    id: "database",
    type: "SERVICE",
    position: { x: 350, y: 1000 },
    data: {
      label: "Base de Datos",
      description: "PostgreSQL con Supabase.",
      priority: 1,
      phase: 1,
      tech: "PostgreSQL + Supabase",
      zone: "infrastructure"
    },
  },
  {
    id: "pwa",
    type: "SERVICE",
    position: { x: 650, y: 1000 },
    data: {
      label: "PWA",
      description: "Instalable en PC y móvil.",
      priority: 2,
      phase: 2,
      tech: "next-pwa",
      zone: "infrastructure"
    },
  },
  {
    id: "ai-integration",
    type: "AI_CONNECTION",
    position: { x: 950, y: 1000 },
    data: {
      label: "IA (Claude/OpenAI)",
      description: "Análisis personalizado y recomendaciones.",
      priority: 4,
      phase: 4,
      tech: "Anthropic API / OpenAI API",
      zone: "integration"
    },
  },
  {
    id: "wearables",
    type: "EXTERNAL_SDK",
    position: { x: 1250, y: 1000 },
    data: {
      label: "Wearables",
      description: "Integración con Apple HealthKit y Google Fit.",
      priority: 4,
      phase: 4,
      tech: "HealthKit / Google Fit SDK",
      zone: "integration"
    },
  },
  {
    id: "calendar",
    type: "SERVICE",
    position: { x: 1550, y: 1000 },
    data: {
      label: "Google Calendar",
      description: "Integración con Google Calendar.",
      priority: 3,
      phase: 3,
      tech: "Google Calendar API",
      zone: "integration"
    },
  },
];

export const edges = [
  // ===== CONEXIONES NOTAS Y ESPECIFICACIONES =====
  // Stack y Estilo alimentan la Landing
  {
    id: "e-stack-landing",
    source: "tech-stack",
    target: "landing",
    label: "define stack",
    type: "CORE"
  },
  {
    id: "e-style-landing",
    source: "style-guide",
    target: "landing",
    label: "define estilo",
    type: "CORE"
  },
  
  // Landing conecta con los flujos principales
  {
    id: "e-landing-bitacora",
    source: "landing",
    target: "learning-paths",
    label: "navega a",
    type: "NAVIGATION"
  },
  {
    id: "e-landing-profile",
    source: "landing",
    target: "profile",
    label: "navega a",
    type: "NAVIGATION"
  },
  {
    id: "e-landing-projects",
    source: "landing",
    target: "projects",
    label: "navega a",
    type: "NAVIGATION"
  },

  // ===== CONEXIONES FASE 1 - RUTAS DE ESTUDIO =====
  {
    id: "e-paths-cat-software",
    source: "learning-paths",
    target: "category-software",
    label: "organiza",
    type: "RELATIONSHIP"
  },
  {
    id: "e-paths-cat-personal",
    source: "learning-paths",
    target: "category-personal",
    label: "organiza",
    type: "RELATIONSHIP"
  },
  {
    id: "e-paths-cat-business",
    source: "learning-paths",
    target: "category-business",
    label: "organiza",
    type: "RELATIONSHIP"
  },
  {
    id: "e-cat-software-lessons",
    source: "category-software",
    target: "lessons",
    label: "agrupa",
    type: "RELATIONSHIP"
  },

  // ===== CONEXIONES FASE 2 - MARCA PERSONAL =====
  {
    id: "e-profile-experience",
    source: "profile",
    target: "experience",
    label: "sustenta",
    type: "RELATIONSHIP"
  },
  {
    id: "e-profile-skills",
    source: "profile",
    target: "skills",
    label: "muestra",
    type: "RELATIONSHIP"
  },
  
  // ===== CONEXIONES FASE 3 - PORTAFOLIO DE PROYECTOS =====
  {
    id: "e-projects-detail",
    source: "projects",
    target: "project-detail",
    label: "muestra",
    type: "RELATIONSHIP"
  },

  // ===== CONEXIONES FASE 3 - FINANZAS (3.1) =====
  {
    id: "e-finances-income",
    source: "finances",
    target: "income",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-finances-expense",
    source: "finances",
    target: "expense",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-finances-debt",
    source: "finances",
    target: "debt",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-finances-documents",
    source: "finances",
    target: "documents",
    label: "registra",
    type: "RELATIONSHIP"
  },

  // ===== CONEXIONES FASE 3 - SALUD (3.2) =====
  {
    id: "e-health-body",
    source: "health",
    target: "body-record",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-health-nutrition",
    source: "health",
    target: "nutrition-log",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-health-sleep",
    source: "health",
    target: "sleep-record",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-health-workout",
    source: "health",
    target: "workout-log",
    label: "agrupa",
    type: "RELATIONSHIP"
  },
  {
    id: "e-health-documents",
    source: "health",
    target: "documents",
    label: "archiva",
    type: "RELATIONSHIP"
  },

  // ===== CONEXIONES FASE 4 - HÁBITOS (4.1) =====
  {
    id: "e-habits-template",
    source: "habits",
    target: "habit-template",
    label: "define",
    type: "RELATIONSHIP"
  },
  {
    id: "e-habits-log",
    source: "habits",
    target: "habit-log",
    label: "registra",
    type: "RELATIONSHIP"
  },
  {
    id: "e-habits-notifications",
    source: "habits",
    target: "notifications",
    label: "genera",
    type: "RELATIONSHIP"
  },

  // ===== CONEXIONES FASE 4 - NOTIFICACIONES (4.2) =====
  {
    id: "e-notifications-entity",
    source: "notifications",
    target: "notification",
    label: "usa",
    type: "RELATIONSHIP"
  },

  // ===== CONEXIONES CAPA TÉCNICA - AUTENTICACIÓN =====
  {
    id: "e-auth-finances",
    source: "auth",
    target: "finances",
    label: "protege",
    type: "SECURITY"
  },
  {
    id: "e-auth-health",
    source: "auth",
    target: "health",
    label: "protege",
    type: "SECURITY"
  },
  {
    id: "e-auth-devices",
    source: "auth",
    target: "devices",
    label: "protege",
    type: "SECURITY"
  },
  {
    id: "e-auth-habits",
    source: "auth",
    target: "habits",
    label: "protege",
    type: "SECURITY"
  },
  {
    id: "e-auth-notifications",
    source: "auth",
    target: "notifications",
    label: "protege",
    type: "SECURITY"
  },

  // ===== CONEXIONES CAPA TÉCNICA - BASE DE DATOS =====
  {
    id: "e-db-finances",
    source: "database",
    target: "finances",
    label: "almacena",
    type: "DATA"
  },
  {
    id: "e-db-health",
    source: "database",
    target: "health",
    label: "almacena",
    type: "DATA"
  },
  {
    id: "e-db-devices",
    source: "database",
    target: "devices",
    label: "almacena",
    type: "DATA"
  },
  {
    id: "e-db-habits",
    source: "database",
    target: "habits",
    label: "almacena",
    type: "DATA"
  },
  {
    id: "e-db-notifications",
    source: "database",
    target: "notifications",
    label: "almacena",
    type: "DATA"
  },

  // ===== CONEXIONES INTEGRACIONES - IA =====
  {
    id: "e-ai-finances",
    source: "ai-integration",
    target: "finances",
    label: "analiza patrones",
    type: "AI"
  },
  {
    id: "e-ai-health",
    source: "ai-integration",
    target: "health",
    label: "proporciona insights",
    type: "AI"
  },
  {
    id: "e-ai-habits",
    source: "ai-integration",
    target: "habits",
    label: "sugiere hábitos",
    type: "AI"
  },

  // ===== CONEXIONES INTEGRACIONES - WEARABLES =====
  {
    id: "e-wearables-health",
    source: "wearables",
    target: "health",
    label: "sincroniza datos",
    type: "SYNC"
  },
  {
    id: "e-wearables-body",
    source: "wearables",
    target: "body-record",
    label: "envía peso",
    type: "SYNC"
  },
  {
    id: "e-wearables-sleep",
    source: "wearables",
    target: "sleep-record",
    label: "envía sueño",
    type: "SYNC"
  },
  {
    id: "e-wearables-workout",
    source: "wearables",
    target: "workout-log",
    label: "envía ejercicio",
    type: "SYNC"
  },

  // ===== CONEXIONES INTEGRACIONES - CALENDAR =====
  {
    id: "e-calendar-notifications",
    source: "calendar",
    target: "notifications",
    label: "crea eventos",
    type: "INTEGRATION"
  },
  {
    id: "e-calendar-habits",
    source: "calendar",
    target: "habits",
    label: "agenda",
    type: "INTEGRATION"
  },
  {
    id: "e-calendar-habitlog",
    source: "calendar",
    target: "habit-log",
    label: "registra eventos",
    type: "INTEGRATION"
  },

  // ===== CONEXIONES PWA =====
  {
    id: "e-pwa-dashboard",
    source: "pwa",
    target: "finances",
    label: "habilita offline",
    type: "INTEGRATION"
  },
  {
    id: "e-pwa-health",
    source: "pwa",
    target: "health",
    label: "habilita offline",
    type: "INTEGRATION"
  },

  // ===== CONEXIONES ADICIONALES - HÁBITOS Y SALUD =====
  {
    id: "e-habits-health",
    source: "habits",
    target: "health",
    label: "promueve",
    type: "RELATIONSHIP"
  },
  {
    id: "e-workout-habits",
    source: "workout-log",
    target: "habits",
    label: "alimenta",
    type: "RELATIONSHIP"
  },
  {
    id: "e-sleep-habits",
    source: "sleep-record",
    target: "habits",
    label: "alimenta",
    type: "RELATIONSHIP"
  },
];
