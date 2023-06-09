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

                            <a href='#projects'>View my work</a>
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
                                <a href=''>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='M8.2177 20.2976C15.798 20.2976 19.9327 14.0329 19.9327 8.58261V8.05011C20.7362 7.46091 21.435 6.74089 22 5.92012C21.2567 6.26235 20.4637 6.48437 19.6507 6.57791C20.5139 6.06164 21.1597 5.24885 21.4675 4.2913C20.6598 4.76183 19.7822 5.10021 18.8677 5.29365C17.3053 3.64491 14.7069 3.56109 13.0415 5.10571C11.9701 6.10222 11.5157 7.59694 11.8512 9.02114C8.54594 8.85772 5.46574 7.29769 3.37823 4.72983C2.28095 6.60789 2.84519 9.01622 4.66249 10.2114C4.00661 10.1858 3.36464 10.0146 2.78309 9.71026V9.7729C2.78257 11.7293 4.15628 13.417 6.07204 13.8136C5.46884 13.9751 4.83671 13.9965 4.22396 13.8763C4.76475 15.5538 6.31437 16.7003 8.07674 16.7267C6.62377 17.8749 4.82287 18.4936 2.97103 18.4808C2.65779 18.4808 2.31323 18.4495 2 18.4182C3.84433 19.6513 6.0148 20.3057 8.23336 20.2976'
                                        />
                                    </svg>
                                </a>

                                <a href=''>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <g fill='currentColor'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M11.9969 2.00632C9.28187 2.00632 8.94143 2.01783 7.87516 2.06648C6.81111 2.11501 6.0844 2.28402 5.44853 2.53116C4.79115 2.78659 4.23365 3.12842 3.67786 3.68417C3.1221 4.23997 2.78028 4.79747 2.52484 5.45485C2.2777 6.09072 2.10869 6.81743 2.06016 7.88148C2.01151 8.94775 2 9.28818 2 12.0032C2 14.7181 2.01151 15.0586 2.06016 16.1249C2.10869 17.1889 2.2777 17.9156 2.52484 18.5515C2.78028 19.2089 3.1221 19.7664 3.67786 20.3222C4.23365 20.8779 4.79115 21.2197 5.44853 21.4752C6.0844 21.7223 6.81111 21.8913 7.87516 21.9398C8.94143 21.9885 9.28187 22 11.9969 22C14.7118 22 15.0523 21.9885 16.1185 21.9398C17.1826 21.8913 17.9093 21.7223 18.5452 21.4752C19.2025 21.2197 19.76 20.8779 20.3158 20.3222C20.8716 19.7664 21.2134 19.2089 21.4689 18.5515C21.716 17.9156 21.885 17.1889 21.9335 16.1249C21.9822 15.0586 21.9937 14.7181 21.9937 12.0032C21.9937 9.28818 21.9822 8.94775 21.9335 7.88148C21.885 6.81743 21.716 6.09072 21.4689 5.45485C21.2134 4.79747 20.8716 4.23997 20.3158 3.68417C19.76 3.12842 19.2025 2.78659 18.5452 2.53116C17.9093 2.28402 17.1826 2.11501 16.1185 2.06648C15.0523 2.01783 14.7118 2.00632 11.9969 2.00632ZM11.9969 3.80755C14.6661 3.80755 14.9823 3.81775 16.0364 3.86584C17.0111 3.91029 17.5404 4.07314 17.8927 4.21005C18.3593 4.3914 18.6923 4.60802 19.0421 4.95786C19.392 5.30767 19.6086 5.64068 19.79 6.10731C19.9269 6.45957 20.0897 6.9889 20.1342 7.96358C20.1823 9.01771 20.1925 9.3339 20.1925 12.0032C20.1925 14.6724 20.1823 14.9886 20.1342 16.0427C20.0897 17.0174 19.9269 17.5468 19.79 17.899C19.6086 18.3656 19.392 18.6987 19.0421 19.0485C18.6923 19.3983 18.3593 19.6149 17.8927 19.7963C17.5404 19.9332 17.0111 20.096 16.0364 20.1405C14.9825 20.1886 14.6663 20.1988 11.9969 20.1988C9.32738 20.1988 9.01127 20.1886 7.95726 20.1405C6.98258 20.096 6.45325 19.9332 6.10099 19.7963C5.63437 19.6149 5.30135 19.3983 4.95155 19.0485C4.60175 18.6987 4.38508 18.3656 4.20373 17.899C4.06683 17.5468 3.90397 17.0174 3.85952 16.0427C3.81143 14.9886 3.80123 14.6724 3.80123 12.0032C3.80123 9.3339 3.81143 9.01771 3.85952 7.96358C3.90397 6.9889 4.06683 6.45957 4.20373 6.10731C4.38508 5.64068 4.60171 5.30767 4.95155 4.95786C5.30135 4.60802 5.63437 4.3914 6.10099 4.21005C6.45325 4.07314 6.98258 3.91029 7.95726 3.86584C9.01139 3.81775 9.32758 3.80755 11.9969 3.80755Z'
                                            />
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M11.9968 15.3355C10.1564 15.3355 8.66451 13.8435 8.66451 12.0032C8.66451 10.1628 10.1564 8.67089 11.9968 8.67089C13.8372 8.67089 15.3291 10.1628 15.3291 12.0032C15.3291 13.8435 13.8372 15.3355 11.9968 15.3355ZM11.9968 6.86966C9.16161 6.86966 6.86328 9.16799 6.86328 12.0032C6.86328 14.8384 9.16161 17.1367 11.9968 17.1367C14.832 17.1367 17.1303 14.8384 17.1303 12.0032C17.1303 9.16799 14.832 6.86966 11.9968 6.86966Z'
                                            />
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M18.5328 6.66684C18.5328 7.32938 17.9957 7.86644 17.3331 7.86644C16.6706 7.86644 16.1335 7.32938 16.1335 6.66684C16.1335 6.0043 16.6706 5.46719 17.3331 5.46719C17.9957 5.46719 18.5328 6.0043 18.5328 6.66684Z'
                                            />
                                        </g>
                                    </svg>
                                </a>

                                <a href=''>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='M20.875 2H3.09375C2.46875 2 2 2.5 2 3.09375V20.875C2 21.5 2.5 21.9687 3.09375 21.9687H12.6875V14.2188H10.0625V11.1875H12.6562V8.96874C12.6562 6.375 14.2187 4.96875 16.5312 4.96875C17.625 4.96875 18.5937 5.0625 18.875 5.09375V7.78125H17.2812C16.0312 7.78125 15.7812 8.375 15.7812 9.25V11.1875H18.7812L18.4062 14.25H15.8125V22H20.9062C21.5312 22 22 21.5 22 20.9062V3.125C22 2.46875 21.5 2 20.875 2Z'
                                        />
                                    </svg>
                                </a>

                                <a href=''>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M21.3766 4.10479C22.4093 4.38257 23.2225 5.20102 23.4985 6.24038C24 8.12411 24 12.0545 24 12.0545C24 12.0545 24 15.9848 23.4985 17.8688C23.2225 18.908 22.4093 19.7265 21.3766 20.0044C19.505 20.5091 12 20.5091 12 20.5091C12 20.5091 4.49496 20.5091 2.62336 20.0044C1.59082 19.7265 0.777545 18.908 0.501545 17.8688C0 15.9848 0 12.0545 0 12.0545C0 12.0545 0 8.12411 0.501545 6.24038C0.777545 5.20102 1.59082 4.38257 2.62336 4.10479C4.49496 3.59998 12 3.59998 12 3.59998C12 3.59998 19.505 3.59998 21.3766 4.10479ZM15.8182 12.0546L9.54551 15.623V8.48596L15.8182 12.0546Z'
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
