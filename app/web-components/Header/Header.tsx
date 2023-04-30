import ContactButton from '../Contact/Contact';
import styles from './Header.module.css';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

type Link = {
    name: string;
    href: string;
};

const links: Link[] = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Myself', href: '#myself' },
    { name: 'Socials', href: '#socials' },
];

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link
                    href='/'
                    className={styles.brand}
                >
                    <img
                        src='/assets/favicon.svg'
                        alt='Website Icon'
                    />
                </Link>

                <div className={styles.navLinks}>
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            className={styles.navLink}
                            key={uuidv4()}
                        >
                            {link.name}
                        </Link>
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
