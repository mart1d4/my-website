import Header from './web-components/Header/Header';
import Footer from './web-components/Footer/Footer';
import styles from './Home.module.css';
import { ReactElement } from 'react';
import Link from 'next/link';

const HomePage = (): ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>
                <Header />

                <div className={styles.hero}>
                    <div>
                        <div className={styles.heroText}>
                            <h1>MAKE THE FUTURE</h1>
                            <div>
                                My name is Martin, and I'm a student at a French
                                University, studying computer science. I have a
                                strong passion for programming, and I've been
                                actively learning and working on various
                                projects in my free time.
                            </div>
                        </div>

                        <div className={styles.heroButtons}>
                            <Link href='/download'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width={24}
                                    height={24}
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    fill='none'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                >
                                    <line
                                        x1='10'
                                        y1='14'
                                        x2='21'
                                        y2='3'
                                    />
                                    <path d='M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5' />
                                </svg>
                                Contact me
                            </Link>

                            <Link href='/login'>View my work</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/programming.png'
                            alt=''
                        />

                        <div>
                            <h2>The skills you need</h2>

                            <div>
                                I am proficient in several programming languages
                                and technologies, including Python, TypeScript,
                                ReactJS, Nextjs and Git. I have experience
                                building web applications and websites, and I am
                                currently working on expanding my knowledge of
                                C, C++, and C#.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/learning.png'
                            alt=''
                        />

                        <div>
                            <h2>An education that's worth your time</h2>

                            <div>
                                I am currently pursuing a bachelor's degree in
                                computer science at a French University. I have
                                completed coursework in programming, data
                                structures and algorithms, database management,
                                and software engineering.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/code.png'
                            alt=''
                        />

                        <div>
                            <h2>From few to a fandom</h2>

                            <div>
                                Get any community running with moderation tools
                                and custom member access. Give members special
                                powers, set up private channels, and more.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div>
                        <div>
                            <h2>Reliable tech for staying close</h2>

                            <div>
                                I am excited to continue learning and growing as
                                a programmer and am open to any opportunities
                                that align with my interests and skills. Please
                                feel free to contact me for any inquiries or
                                collaborations.
                            </div>
                        </div>

                        <img
                            src='/assets/homepage/software.png'
                            alt='Stylized image showing friends video talking with each other on desktop and mobile.'
                        />
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div>
                        <h4>Ready to take the first step?</h4>

                        <a href=''>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width={24}
                                height={24}
                                stroke-width='1.5'
                                stroke='currentColor'
                                fill='none'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            >
                                <line
                                    x1='10'
                                    y1='14'
                                    x2='21'
                                    y2='3'
                                />
                                <path d='M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5' />
                            </svg>
                            Send me a message
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
