const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const DashboardIcon = () => (
  <svg {...baseProps}>
    <path d="M4 11L12 5l8 6" />
    <path d="M5 10v10h5v-5h4v5h5V10" />
  </svg>
);

export const InventoryIcon = () => (
  <svg {...baseProps}>
    <rect x="4" y="6.5" width="16" height="12.5" rx="2" />
    <path d="M4 12h16" />
    <path d="M12 6.5v12.5" />
  </svg>
);

export const UsersIcon = () => (
  <svg {...baseProps}>
    <circle cx="9" cy="9" r="3" />
    <circle cx="16" cy="10.5" r="2.5" />
    <path d="M4 19c0-2.8 2.2-5 5-5h0.2" />
    <path d="M12.5 19c0-2.2 1.8-4 4-4H21" />
  </svg>
);

export const ReportsIcon = () => (
  <svg {...baseProps}>
    <path d="M8 4h7l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M15 4v5h5" />
    <path d="M9 13h7" />
    <path d="M9 17h9" />
  </svg>
);

export const AnalyticsIcon = () => (
  <svg {...baseProps}>
    <path d="M4 19h16" />
    <path d="M8 19V11" />
    <path d="M12 19V7" />
    <path d="M16 19v-5" />
  </svg>
);

export const OrdersIcon = () => (
  <svg {...baseProps}>
    <path d="M9.5 5h5" />
    <path d="M8 4h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

export const ExitIcon = () => (
  <svg {...baseProps}>
    <path d="M15 8l3 4-3 4" />
    <path d="M12 12h6" />
    <path d="M5 5h5v14H5" />
  </svg>
);

export const WrenchIcon = () => (
  <svg {...baseProps}>
    <path d="M14.5 4.5a3.5 3.5 0 0 0-4.6 4.6L5 14v3l3-3 4.9 4.9 2.6-2.6L10.5 11a3.5 3.5 0 0 0 4-5.5z" />
  </svg>
);

export const HistoryIcon = () => (
  <svg {...baseProps}>
    <path d="M8 5L5 8l3 3" />
    <circle cx="12" cy="12" r="7" />
    <path d="M12 9v4l2 2" />
  </svg>
);

export const FilesIcon = () => (
  <svg {...baseProps}>
    <path d="M8 4h7l3 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M15 4v3h3" />
    <path d="M9 10h7" />
    <path d="M9 14h5" />
  </svg>
);

export const LayersIcon = () => (
  <svg {...baseProps}>
    <path d="M12 4l8 4-8 4-8-4 8-4z" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 16l8 4 8-4" />
  </svg>
);
