export const projectMeta = {
  name: "Mi Proyecto",
  description: "Descripción general del sistema",
};

export const nodes = [
  // ─── MÓDULOS ───────────────────────────────────────────
  {
    id: "usuarios",
    type: "MODULE",
    position: { x: 100, y: 200 },
    data: {
      label: "Usuarios",
      description: "Gestiona registro y perfil de usuarios.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "nombre", type: "string" },
        { name: "email", type: "string" },
        { name: "rol", type: "enum(paciente, doctor, admin)" },
      ],
    },
  },
  {
    id: "historial",
    type: "MODULE",
    position: { x: 450, y: 200 },
    data: {
      label: "Historial Médico",
      description: "Almacena métricas y registros de salud del usuario.",
      fields: [
        { name: "id", type: "UUID" },
        { name: "usuario_id", type: "UUID → Usuarios" },
        { name: "fecha", type: "datetime" },
        { name: "tipo", type: "string" },
        { name: "valor", type: "float" },
        { name: "unidad", type: "string" },
      ],
    },
  },

  // ─── INTEGRACIONES IA ──────────────────────────────────
  {
    id: "ia-claude",
    type: "AI_CONNECTION",
    position: { x: 800, y: 100 },
    data: {
      label: "Claude (Anthropic)",
      model: "claude-3-5-sonnet",
      accesses: ["historial", "usuarios"],
      delivers: "Recomendaciones de salud personalizadas basadas en tendencias del historial.",
    },
  },

  // ─── SDKs EXTERNOS ─────────────────────────────────────
  {
    id: "sdk-applewatch",
    type: "EXTERNAL_SDK",
    position: { x: 100, y: 500 },
    data: {
      label: "Apple Watch (HealthKit)",
      extractedData: [
        { field: "frecuencia_cardíaca", unit: "bpm", frequency: "tiempo real" },
        { field: "pasos_diarios", unit: "integer", frequency: "cada hora" },
        { field: "horas_sueño", unit: "float", frequency: "diario" },
      ],
      sendsTo: "historial",
    },
  },

  // ─── SERVICIOS EXTERNOS ────────────────────────────────
  {
    id: "svc-sendgrid",
    type: "SERVICE",
    position: { x: 800, y: 450 },
    data: {
      label: "SendGrid",
      description: "Envío de notificaciones y alertas por correo electrónico.",
      connectedTo: "usuarios",
    },
  },

  // ─── ROLES DE USUARIO ──────────────────────────────────
  {
    id: "role-paciente",
    type: "USER_ROLE",
    position: { x: 450, y: 500 },
    data: {
      label: "Paciente",
      permissions: [
        "Ver su propio historial",
        "Consultar respuestas de la IA",
        "Ver notificaciones",
      ],
      accessTo: ["usuarios", "historial"],
    },
  },
];

export const edges = [
  {
    id: "e-watch-historial",
    source: "sdk-applewatch",
    target: "historial",
    label: "envía métricas de salud",
    type: "DATA",
  },
  {
    id: "e-claude-historial",
    source: "ia-claude",
    target: "historial",
    label: "consulta historial",
    type: "AI",
  },
  {
    id: "e-claude-usuarios",
    source: "ia-claude",
    target: "usuarios",
    label: "personaliza respuestas",
    type: "AI",
  },
  {
    id: "e-sendgrid-usuarios",
    source: "svc-sendgrid",
    target: "usuarios",
    label: "notificaciones email",
    type: "SERVICE",
  },
];
