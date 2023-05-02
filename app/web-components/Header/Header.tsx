import ContactButton from '../Contact/Contact';
import styles from './Header.module.css';
import { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Link = {
    name: string;
    href: string;
};

const links: Link[] = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Myself', href: '#myself' },
    { name: 'Socials', href: '#socials' },
];

const Header = (): ReactElement => {
    return (
        <header
            className={styles.header}
            id='home'
        >
            <nav>
                <a
                    href='/'
                    className={styles.brand}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='58'
                        height='58'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='hsl(229, 19%, 23%)'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M5 11h14v-3h-14z' />
                        <path d='M17.5 11l-1.5 10h-8l-1.5 -10' />
                        <path d='M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1' />
                        <path d='M15 5v-2' />
                    </svg>
                </a>

                <div className={styles.navLinks}>
                    {links.map((link) => (
                        <a
                            href={link.href}
                            className={styles.navLink}
                            key={uuidv4()}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className={styles.appButton}>
                    <ContactButton>
                        <button>Contact</button>
                    </ContactButton>
                </div>
            </nav>
        </header>
    );
};

export default Header;
