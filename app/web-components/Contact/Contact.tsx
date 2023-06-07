'use client';

import {
    useState,
    ReactElement,
    ReactNode,
    cloneElement,
    Dispatch,
    SetStateAction,
    useRef,
    useEffect,
} from 'react';
import styles from './Contact.module.css';

type TooltipType = { message: string; error: boolean };

export const ContactButton = ({ children }: { children: ReactNode }): ReactElement => {
    const [showPopout, setShowPopout] = useState(false);
    const [showTooltip, setShowTooltip] = useState<TooltipType>({ message: '', error: false });

    useEffect(() => {
        if (showPopout) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    }, [showPopout]);

    useEffect(() => {
        if (showTooltip.message.length === 0) return;

        const timeout = setTimeout(() => {
            setShowTooltip({ message: '', error: false });
        }, 10000);

        return () => clearTimeout(timeout);
    }, [showTooltip]);

    const Tooltip = () => (
        <div className={showTooltip.error ? styles.tooltipError : styles.tooltipSuccess}>
            <div className={styles.tooltipIcon}>
                {showTooltip.error ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M15 19h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5' />
                        <path d='M3 7l9 6l9 -6' />
                        <path d='M19 16v3' />
                        <path d='M19 22v.01' />
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6' />
                        <path d='M3 7l9 6l9 -6' />
                        <path d='M15 19l2 2l4 -4' />
                    </svg>
                )}
            </div>

            {showTooltip.message}
        </div>
    );

    if (showPopout) {
        return (
            <>
                {cloneElement(children as ReactElement, {
                    onClick: () => setShowPopout(!showPopout),
                })}

                <ContactPopout
                    setShow={setShowPopout}
                    setShowTooltip={setShowTooltip}
                />

                {showTooltip.message.length > 0 && <Tooltip />}
            </>
        );
    }

    return (
        <>
            {cloneElement(children as ReactElement, {
                onClick: () => setShowPopout(!showPopout),
            })}

            {showTooltip.message.length > 0 && <Tooltip />}
        </>
    );
};

const ContactPopout = ({
    setShow,
    setShowTooltip,
}: {
    setShow: Dispatch<SetStateAction<boolean>>;
    setShowTooltip: Dispatch<SetStateAction<TooltipType>>;
}): ReactElement => {
    const [contact, setContact] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const popoutRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async () => {
        setLoading(true);

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender: contact,
                content: message,
            }),
        });

        if (response.ok) {
            setShowTooltip({
                message: 'Email sent successfully!',
                error: false,
            });
            setShow((prev) => !prev);
        } else {
            setShowTooltip({
                message: 'Something went wrong, please try again later',
                error: true,
            });
        }

        setLoading(false);
    };

    return (
        <div
            className={styles.wrapper}
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
                        Please leave your message as well as a way for me to answer you (or none if
                        you don't want a reply)
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

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!message?.length) {
                            alert('Please enter a message');
                            return;
                        }
                        handleSubmit();
                    }}
                >
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
                                    height: messageRef.current?.scrollHeight || 40,
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
                                        const input = e.target as HTMLDivElement;
                                        const text = input.innerText.toString();
                                        setMessage(text);
                                    }}
                                />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <span>Rather send an email?</span>
                            <a href='mailto:contact@mart1d4.com'>contact@mart1d4.com</a>
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
