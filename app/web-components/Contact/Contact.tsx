'use client';

import {
    useState,
    ReactElement,
    ReactNode,
    cloneElement,
    Dispatch,
    SetStateAction,
    useRef,
} from 'react';
import styles from './Contact.module.css';

const ContactButton = ({ children }: { children: ReactNode }): ReactElement => {
    const [showPopout, setShowPopout] = useState(false);

    if (showPopout) {
        document.body.style.overflow = 'hidden';

        return (
            <>
                {cloneElement(children as ReactElement, {
                    onClick: () => setShowPopout(!showPopout),
                })}

                <ContactPopout setShow={setShowPopout} />
            </>
        );
    }

    document.body.style.overflow = 'auto';

    return cloneElement(children as ReactElement, {
        onClick: () => setShowPopout(!showPopout),
    });
};

const ContactPopout = ({
    setShow,
}: {
    setShow: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {
    const [contact, setContact] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const popoutRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    return (
        <div
            id={styles.wrapper}
            onMouseDown={(e) => {
                if (!popoutRef.current.contains(e.target as Node)) {
                    setShow((prev) => !prev);
                }
            }}
        >
            <div ref={popoutRef}>
                <div className={styles.header}>
                    <h1>Contact me</h1>
                    <p>
                        Please leave your message as well as a way for me to
                        answer you
                    </p>

                    <button onClick={() => setShow((prev) => !prev)}>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='currentColor'
                                d='M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z'
                            />
                        </svg>
                    </button>
                </div>

                <form>
                    <div>
                        <div className={styles.inputContainer}>
                            <h2>How to contact you</h2>

                            <div>
                                <input
                                    type='text'
                                    placeholder='Email, phone number, etc.'
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <h2>Your message</h2>

                            <div
                                style={{
                                    height:
                                        messageRef.current?.scrollHeight ||
                                        '40px',
                                }}
                            >
                                <div
                                    ref={messageRef}
                                    role='textarea'
                                    spellCheck='true'
                                    autoCorrect='off'
                                    aria-multiline='true'
                                    aria-autocomplete='list'
                                    contentEditable={'plaintext-only' as any}
                                    onInput={(e) => {
                                        const input =
                                            e.target as HTMLDivElement;
                                        const text = input.innerText.toString();
                                        setMessage(text);
                                    }}
                                />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <span>Rather send an email?</span>
                            <a href='mailto:contact@mart1d4.com'>
                                contact@mart1d4.com
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className={styles.button}
                        >
                            Send
                        </button>

                        <button
                            type='button'
                            className={styles.button}
                            onClick={() => setShow((prev) => !prev)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactButton;
