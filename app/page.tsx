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
                            <h1>MAKE THE FUTURE</h1>
                            <div>
                                My name is Martin, and I'm studying computer
                                science at a French University. I have a strong
                                passion for programming, and I've been actively
                                learning and working on various projects in my
                                free time.
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

                            <a href='#projects'>View my work</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.contentGrid}>
                    <div>
                        <img
                            src='/assets/homepage/programming.svg'
                            alt=''
                        />

                        <div className={styles.contentP}>
                            <h2>The skills that you need</h2>

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
                            src='/assets/homepage/learning.svg'
                            alt=''
                        />

                        <div className={styles.contentP}>
                            <h2>A thorough education</h2>

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
                            src='/assets/homepage/skills.svg'
                            alt=''
                        />

                        <div className={styles.contentP}>
                            <h2>Yes, it's not finished yet</h2>

                            <div>
                                I am still working on this website, so it's not
                                finished yet. I'm planning to add a blog sooner
                                or later. It is not my priority for now, but I
                                will add it in the future.
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
                                Here are the projects I've made. All of them are
                                open source, so feel free to check them out on
                                my GitHub. Others are coming soon, so stay tuned
                                for more.
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
                        <div>
                            <h2>
                                My curriculum vitae is available{' '}
                                <a
                                    href='/assets/cv.pdf'
                                    download
                                >
                                    here
                                </a>
                            </h2>

                            <p>
                                Joking, I don't have a CV yet. I'm still
                                studying, so I don't have much to put on it. But
                                I'm working on it, so it will be available soon.
                            </p>
                        </div>

                        <div className={styles.contentP}>
                            <h2>Myself</h2>

                            <div>
                                I am me, and I am proud of it. I am a
                                self-motivated and hard-working individual who
                                is passionate about programming and technology.
                                I am a quick learner and enjoy taking on new
                                challenges. I am also a team player and enjoy
                                collaborating with others to achieve a common
                                goal.
                                <br />
                                <br />
                                This is why I am the best, and you should hire
                                me. I'm joking, but I'm still the best.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid + ' ' + styles.workTogether}>
                    <div>
                        <div className={styles.contentP}>
                            <h2>Let's Work Together</h2>

                            <div>
                                I am excited to continue learning and growing as
                                a programmer and am open to any opportunities
                                that align with my interests and skills. Please
                                feel free to contact me for any inquiries or
                                collaborations.
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
