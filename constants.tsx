
import React from 'react';

export const DrillIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
        <path d="M18 6h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
        <path d="m5 15-2 4" />
        <path d="m10 12-5 5" />
        <path d="M15.2 3.8a2 2 0 0 0-2-2" />
        <path d="m18 9-5 5" />
        <path d="M19 13.3a2 2 0 0 0 2 2" />
        <path d="M14 17h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4" />
        <path d="M9 16H4a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h5" />
    </svg>
);

export const SoilIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M2 12h3" />
        <path d="M7 12h2" />
        <path d="M12 12h2" />
        <path d="M17 12h3" />
        <path d="m2 16 20 0" />
        <path d="M2 8h2" />
        <path d="M6 8h2" />
        <path d="M10 8h2" />
        <path d="M14 8h2" />
        <path d="M18 8h2" />
        <path d="M2 20h20" />
        <path d="M4 4v12" />
        <path d="M8 4v8" />
        <path d="M12 4v12" />
        <path d="M16 4v8" />
        <path d="M20 4v12" />
    </svg>
);

export const ReportIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M8 3H2v18h20V3h-6" />
        <path d="M12 3v18" />
        <path d="M12 3h4" />
        <path d="M16 7h-4" />
        <path d="M16 11h-4" />
        <path d="M16 15h-4" />
        <path d="M8 7H4" />
        <path d="M8 11H4" />
        <path d="M8 15H4" />
    </svg>
);

export const GeologyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="11.5" cy="14.5" r="2.5" />
        <path d="M13.25 16.25 15 18" />
    </svg>
);

export const WhatsAppIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42s2.42 3.62 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm3.53-5.2c-.17-.08-1-.49-1.16-.55-.16-.06-.28-.08-.4.08-.12.17-.44.55-.54.66-.1.12-.2.13-.37.05-.17-.08-.72-.26-1.36-.83-.5-.45-.84-.99-.94-1.16-.1-.17-.01-.26.07-.34.08-.08.17-.21.26-.31.09-.1.12-.17.18-.28.06-.11.03-.2-.01-.28-.05-.08-.4-.96-.55-1.32-.15-.36-.3-.31-.4-.31h-.4c-.12 0-.3.05-.46.22-.15.17-.58.57-.58 1.4s.6 1.62.68 1.73c.08.11 1.18 1.8 2.85 2.5.38.16.69.26.92.33.32.1.61.09.84-.04.26-.16.99-.4 1.13-.79.14-.39.14-.72.1-.79z"/>
  </svg>
);


export const EmailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export const UserPlaceholderIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);