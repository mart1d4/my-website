import { ReactElement, ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
    title: 'Portfolio | mart1d4',
    description: 'My very own work portfolio',
    keywords:
        'portfolio, work, projects, mart1d4, React, Next.js, TypeScript, Vercel, JavaScript, C, Java',
    icons: {
        icon: '/assets/favicon.svg',
    },
};

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
