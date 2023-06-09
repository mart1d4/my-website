import ContactButton from '../Contact/Contact';
import styles from './Footer.module.css';
import { v4 as uuidv4 } from 'uuid';
import Language from './Language';

type Route = {
    title: string;
    children: {
        name: string;
        link: string;
    }[];
};

const routes: Route[] = [
    {
        title: 'Site Map',
        children: [
            { name: 'Home', link: '#home' },
            { name: 'Projects', link: '#projects' },
            { name: 'Myself', link: '#myself' },
            { name: 'Socials', link: '#socials' },
        ],
    },
    {
        title: 'Socials',
        children: [
            { name: 'GitHub', link: 'https://github.com/mart1d4' },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/martin-danton-ba3458239/',
            },
            {
                name: 'Upwork',
                link: 'https://www.upwork.com/freelancers/~016ac4c06c7d6073ef',
            },
            { name: 'Twitter', link: 'https://' },
        ],
    },
    {
        title: 'Projects',
        children: [
            { name: 'Chat App', link: 'https://chat-app.mart1d4.com' },
            { name: 'Floppy Bot', link: 'https://floppy-bot.mart1d4.com' },
            {
                name: 'Etch a Sketch',
                link: 'https://etch-a-sketch.mart1d4.com',
            },
            { name: 'Homepage', link: 'https://homepage.mart1d4.com' },
            { name: 'Calculator', link: 'https://calculator.mart1d4.com' },
        ],
    },
    {
        title: 'Thanks',
        children: [
            { name: 'Discord', link: 'https://discord.com' },
            { name: 'React', link: 'https://reactjs.org' },
            { name: 'Next.js', link: 'https://nextjs.org' },
            { name: 'Vercel', link: 'https://vercel.com' },
            { name: 'unDraw', link: 'https://undraw.co' },
            { name: 'Catppuccin', link: 'https://github.com/catppuccin/catppuccin' },
        ],
    },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.infoBox}>
                    <h4>Create tomorrow</h4>

                    <Language />

                    <div className={styles.socials}>
                        <a
                            href=''
                            title='GitHub'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z'
                                    strokeWidth='0'
                                    fill='currentColor'
                                />
                            </svg>
                        </a>

                        <a
                            href=''
                            title='LinkedIn'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                                <path d='M8 11l0 5' />
                                <path d='M8 8l0 .01' />
                                <path d='M12 16l0 -5' />
                                <path d='M16 16v-3a2 2 0 0 0 -4 0' />
                            </svg>
                        </a>

                        <a
                            href=''
                            title='Upwork'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path d='M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8' />
                            </svg>
                        </a>

                        <a
                            href=''
                            title='Twitter'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z'
                                    strokeWidth='0'
                                    fill='currentColor'
                                />
                            </svg>
                        </a>

                        <a
                            href=''
                            title='Twitter'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z'
                                    strokeWidth='0'
                                    fill='currentColor'
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <div />

                {routes.map((route) => (
                    <div
                        key={uuidv4()}
                        className={styles.footerColumn}
                    >
                        <h5>{route.title}</h5>
                        {route.children.map((child) => (
                            <a
                                key={uuidv4()}
                                href={child.link}
                                target={!child.link.includes('#') ? '_blank' : '_self'}
                            >
                                {child.name}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <div>
                    <div className={styles.footerSeparator} />

                    <div className={styles.bottomFooterContent}>
                        <a href='/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='38'
                                height='38'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='hsl(227, 70%, 87%)'
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

                        <ContactButton>
                            <button>Contact</button>
                        </ContactButton>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
