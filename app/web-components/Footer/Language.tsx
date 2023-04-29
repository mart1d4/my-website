'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Footer.module.css';
import { v4 as uuidv4 } from 'uuid';

type Language = {
    name: string;
    flag: string;
};

const languages: Language[] = [
    { name: 'Deutsch', flag: 'ger' },
    { name: 'English, USA', flag: 'usa' },
    { name: 'Español', flag: 'esp' },
    { name: 'Français', flag: 'fra' },
];

const Language = () => {
    const [showPopover, setShowPopover] = useState<boolean>(false);
    const [lang, setLang] = useState<Language>(languages[1]);

    const langButton = useRef<HTMLDivElement>(null);
    const langMenu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                langMenu.current?.contains(e.target as Node) ||
                langButton.current?.contains(e.target as Node)
            ) {
                return;
            }

            setShowPopover(false);
        };

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className={styles.language}>
            <div>
                {showPopover && (
                    <div
                        className={styles.langChooser}
                        ref={langMenu}
                    >
                        <div>
                            {languages.map((language) => (
                                <div
                                    key={uuidv4()}
                                    className={styles.langItem}
                                    onClick={() => {
                                        setLang(language);
                                        setShowPopover(false);
                                    }}
                                >
                                    <div>
                                        <img
                                            src={`/assets/flags/${language.flag}.png`}
                                        />
                                        <div>{language.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div
                    onClick={() => setShowPopover((prev) => !prev)}
                    ref={langButton}
                >
                    <div>
                        <img src={`/assets/flags/${lang?.flag}.png`} />
                        <div>{lang?.name}</div>
                    </div>

                    <img
                        src='/assets/home-arrow.svg'
                        alt='Open Locale Picker'
                    />
                </div>
            </div>
        </div>
    );
};

export default Language;
