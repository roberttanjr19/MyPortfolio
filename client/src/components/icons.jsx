function IconShell({ children, title, ...props }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden={title ? undefined : "true"}
            role={title ? "img" : "presentation"}
            {...props}
        >
            {title ? <title>{title}</title> : null}
            {children}
        </svg>
    );
}

export function MenuIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
        </IconShell>
    );
}

export function CloseIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
        </IconShell>
    );
}

export function HomeIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M3 11.5 12 4l9 7.5" />
            <path d="M5.5 10.5V20h13v-9.5" />
            <path d="M9.5 20v-6h5v6" />
        </IconShell>
    );
}

export function UserIcon(props) {
    return (
        <IconShell {...props}>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 19c1.6-3.2 4.1-4.8 7-4.8s5.4 1.6 7 4.8" />
        </IconShell>
    );
}

export function CalendarIcon(props) {
    return (
        <IconShell {...props}>
            <rect x="4.5" y="5.5" width="15" height="14" rx="2" />
            <path d="M8 3.5v4" />
            <path d="M16 3.5v4" />
            <path d="M4.5 9.5h15" />
        </IconShell>
    );
}

export function LocationIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M12 21s5-5 5-10a5 5 0 0 0-10 0c0 5 5 10 5 10Z" />
            <circle cx="12" cy="11" r="1.8" />
        </IconShell>
    );
}

export function CodeIcon(props) {
    return (
        <IconShell {...props}>
            <path d="m9 8-4 4 4 4" />
            <path d="m15 8 4 4-4 4" />
            <path d="m13 6-2 12" />
        </IconShell>
    );
}

export function SchoolIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M3.5 9.5 12 5l8.5 4.5L12 14 3.5 9.5Z" />
            <path d="M6.5 11.1V16c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-4.9" />
        </IconShell>
    );
}

export function EducationIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Z" />
            <path d="M7 9v4.5c0 1.5 2.2 2.7 5 2.7s5-1.2 5-2.7V9" />
            <path d="M20 8.5v5" />
        </IconShell>
    );
}

export function ProjectIcon(props) {
    return (
        <IconShell {...props}>
            <rect x="4.5" y="5.5" width="15" height="13" rx="2" />
            <path d="M8 9h8" />
            <path d="M8 12h5" />
            <path d="M8 15h6" />
        </IconShell>
    );
}

export function PhoneIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M8.5 4.8c.5-.7 1.5-1 2.1-.6l1.8 1.1c.6.4.9 1.2.7 1.9l-.8 2c-.2.5 0 1.1.4 1.5l1.6 1.6c.4.4 1 .6 1.5.4l2-.8c.7-.3 1.5 0 1.9.7l1.1 1.8c.4.6.1 1.6-.6 2.1l-1.1.8c-.8.6-1.8.7-2.7.2-2.8-1.4-5.2-3.8-6.6-6.6-.5-.9-.4-1.9.2-2.7l.8-1.1Z" />
        </IconShell>
    );
}

export function InstagramIcon(props) {
    return (
        <IconShell {...props}>
            <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="16.7" cy="7.3" r="0.7" fill="currentColor" stroke="none" />
        </IconShell>
    );
}

export function EmailIcon(props) {
    return (
        <IconShell {...props}>
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <path d="m5.5 8 6.5 5 6.5-5" />
        </IconShell>
    );
}

export function CopyIcon(props) {
    return (
        <IconShell {...props}>
            <rect x="9" y="9" width="9" height="9" rx="2" />
            <path d="M6 15V6.5A1.5 1.5 0 0 1 7.5 5h8.5" />
        </IconShell>
    );
}

export function CheckIcon(props) {
    return (
        <IconShell {...props}>
            <path d="m5 12 4 4 10-10" />
        </IconShell>
    );
}

export function BugIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M9 7.5a3 3 0 0 1 6 0v1" />
            <path d="M8 10H6" />
            <path d="M18 10h-2" />
            <path d="M9 14c0 2.2 1.3 4 3 4s3-1.8 3-4" />
            <path d="M12 7v11" />
            <path d="M8.2 12H5.5" />
            <path d="M18.5 12h-2.7" />
        </IconShell>
    );
}

export function GalleryIcon(props) {
    return (
        <IconShell {...props}>
            <rect x="4.5" y="5" width="15" height="14" rx="2" />
            <circle cx="9" cy="10" r="1.25" />
            <path d="m6.5 17 4-4 2.5 2.5 2-2L17.5 17" />
        </IconShell>
    );
}

export function GridIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M4.5 4.5h5v5h-5zM14.5 4.5h5v5h-5zM4.5 14.5h5v5h-5zM14.5 14.5h5v5h-5z" />
        </IconShell>
    );
}

export function TagIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M5 12.2 12.2 5H19v6.8L11.8 19 5 12.2Z" />
            <circle cx="14.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
        </IconShell>
    );
}

export function StudentIcon(props) {
    return (
        <IconShell {...props}>
            <path d="M4.5 10 12 6l7.5 4-7.5 4-7.5-4Z" />
            <path d="M8 11.8V15c0 1.2 1.7 2.2 4 2.2s4-1 4-2.2v-3.2" />
            <path d="M19.5 10.4V15" />
        </IconShell>
    );
}
