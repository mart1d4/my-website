// @ts-nocheck

import ContactButton from './web-components/Contact/Contact';
import Projects from './web-components/Projects/Projects';
import Header from './web-components/Header/Header';
import Footer from './web-components/Footer/Footer';
import styles from './Home.module.css';
import { ReactElement } from 'react';

const HomePage = (): ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>
                <Header />

                <div className={styles.hero}>
                    <div>
                        <div className={styles.heroText}>
                            <h1>Create tomorrow</h1>
                            <div>
                                Hey, I'm Martin and I'm studying computer science in a French
                                university, with the aim to become a software engineer. I have a
                                great passion for programming, and I have been actively learning and
                                working on various projects in my free time.
                            </div>
                        </div>

                        <div className={styles.heroButtons}>
                            <ContactButton>
                                <button>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        width={24}
                                        height={24}
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        fill='none'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
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
                                </button>
                            </ContactButton>

                            <a
                                href='#projects'
                                role='button'
                            >
                                View my work
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/skills.svg'
                            alt=''
                        />

                        <div className={styles.contentP}>
                            <h2>The skills that you need</h2>

                            <div>
                                I am proficient in several programming languages and technologies,
                                including Python, TypeScript, ReactJS, Nextjs and Git. I have
                                experience building web applications and websites, and I am
                                currently working on expanding my knowledge of C, C++, and C#.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/learning.svg'
                            alt=''
                        />

                        <div className={styles.contentP}>
                            <h2>A thorough education</h2>

                            <div>
                                I am currently pursuing a bachelor's degree in computer science. I
                                have completed coursework in programming, data structures and
                                algorithms, database management, and software engineering.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/growing.svg'
                            alt=''
                        />

                        <div className={styles.contentP}>
                            <h2>Unleashing Potential</h2>

                            <div>
                                Driven by a relentless pursuit of growth and an unwavering belief in
                                pushing boundaries, I strive to deliver innovative solutions that
                                exceed expectations. Let's explore new frontiers, challenge
                                limitations, and create a brighter future through my work.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={styles.contentGrid + ' ' + styles.projects}
                    id='projects'
                >
                    <div>
                        <div className={styles.contentP}>
                            <h2>The Projects I've made</h2>

                            <div>
                                Here are the projects I've made. All of them are open source, so
                                feel free to check them out on my GitHub. Others are coming soon, so
                                stay tuned for more.
                            </div>
                        </div>

                        <Projects />
                    </div>
                </div>

                <div
                    className={styles.contentGrid + ' ' + styles.myself}
                    id='myself'
                >
                    <div>
                        <div className={styles.contentP}>
                            <h2>More about myself</h2>

                            <div>
                                I am me, and I am proud of it. I am a self-motivated and
                                hard-working individual who is passionate about programming and
                                technology. I am a quick learner and enjoy taking on new challenges.
                                I am also a team player and enjoy collaborating with others to
                                achieve a common goal.
                                <br />
                                <br />
                                This is why I am the best, and you should hire me. I'm joking, but
                                I'm still the best.
                            </div>
                        </div>

                        <div
                            className={styles.contentP}
                            id='socials'
                        >
                            <h2>My socials</h2>

                            <div className={styles.socialsContainer}>
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
                    </div>
                </div>

                <div className={styles.contentGrid + ' ' + styles.workTogether}>
                    <div>
                        <div className={styles.contentP}>
                            <h2>Let's Work Together</h2>

                            <div>
                                I am excited to continue learning and growing as a programmer and am
                                open to any opportunities that align with my interests and skills.
                                Please feel free to contact me for any inquiries or collaborations.
                            </div>
                        </div>

                        <img
                            src='/assets/homepage/work.svg'
                            alt='Stylized image showing friends video talking with each other on desktop and mobile.'
                        />
                    </div>
                </div>

                <div className={styles.contentGrid + ' ' + styles.firstStep}>
                    <div>
                        <h4>Ready to take the first step?</h4>

                        <ContactButton>
                            <button>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width={24}
                                    height={24}
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
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
                            </button>
                        </ContactButton>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
