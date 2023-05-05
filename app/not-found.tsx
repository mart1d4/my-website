import { ReactElement } from 'react';

const NotFound = (): ReactElement => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <img
                src='/assets/homepage/404-error.svg'
                alt='404'
            />

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '20px',
                }}
            >
                <h1
                    style={{
                        display: 'inline-block',
                        marginRight: '20px',
                        paddingRight: '20px',
                        fontSize: '24px',
                        fontWeight: 500,
                        lineHeight: '50px',
                        borderRight: '1px solid #FFFFFF33',
                    }}
                >
                    404
                </h1>

                <div
                    style={{
                        display: 'inline-block',
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '50px',
                    }}
                >
                    This page could not be found.
                </div>
            </div>
        </div>
    );
};

export default NotFound;
