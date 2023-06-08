import {
    Html,
    Head,
    Preview,
    Container,
    Section,
    Text,
    Heading,
    Button,
} from '@react-email/components';
import Font from './font';

export const EmailPage = ({ baseUrl, content, sender, buttonLink }) => (
    <Html lang='en'>
        <Head>
            <title>New message</title>

            <Font
                fontFamily='Ginto Nord'
                fallbackFontFamily='Noto Sans'
                webFont={{
                    url: `${baseUrl}/fonts/ginto/GintoNord.woff2`,
                    format: 'woff2',
                }}
                fontWeight={800}
                fontStyle='normal'
            />

            <Font
                fontFamily='gg sans'
                fallbackFontFamily='Noto Sans'
                webFont={{
                    url: `${baseUrl}/fonts/ggsans/500.woff2`,
                    format: 'woff2',
                }}
                fontWeight={500}
                fontStyle='normal'
            />

            <Font
                fontFamily='gg sans'
                fallbackFontFamily='Noto Sans'
                webFont={{
                    url: `${baseUrl}/fonts/ggsans/600.woff2`,
                    format: 'woff2',
                }}
                fontWeight={600}
                fontStyle='normal'
            />

            <Font
                fontFamily='gg sans'
                fallbackFontFamily='Noto Sans'
                webFont={{
                    url: `${baseUrl}/fonts/ggsans/700.woff2`,
                    format: 'woff2',
                }}
                fontWeight={700}
                fontStyle='normal'
            />

            <Font
                fontFamily='gg sans'
                fallbackFontFamily='Noto Sans'
                webFont={{
                    url: `${baseUrl}/fonts/ggsans/800.woff2`,
                    format: 'woff2',
                }}
                fontWeight={800}
                fontStyle='normal'
            />

            <Font
                fontFamily='gg sans'
                fallbackFontFamily='Noto Sans'
                webFont={{
                    url: `${baseUrl}/fonts/ggsans/400.woff2`,
                    format: 'woff2',
                }}
                fontWeight={400}
                fontStyle='normal'
            />
        </Head>

        <Preview>You just received a new message</Preview>

        <Container
            style={{
                backgroundImage: `url(${baseUrl}/assets/email/bg-blob.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: 'hsl(222, 74%, 74%)',
                color: 'hsl(229, 20%, 17%)',
                padding: '20px',
                fontSize: '16px',
            }}
        >
            <Heading
                style={{
                    margin: '0',
                    fontSize: '36px',
                    textAlign: 'center',
                    fontFamily: 'Ginto Nord, Noto Sans, sans-serif',
                    fontWeight: 800,
                    lineHeight: '95%',
                    textTransform: 'uppercase',
                    textRendering: 'geometricPrecision',
                    marginBottom: '40px',
                }}
            >
                New message
            </Heading>

            <Section
                style={{
                    position: 'relative',
                    backgroundColor: 'hsl(172, 39%, 65%)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '4px',
                }}
            >
                <Heading
                    style={{
                        margin: '0',
                        fontSize: '30px',
                        lineHeight: '120%',
                        fontWeight: 800,
                    }}
                >
                    Message content
                </Heading>

                <Text
                    style={{
                        margin: '24px 0',
                        fontSize: '16px',
                        lineHeight: '1.625',
                    }}
                >
                    {content || 'No message provided.'}
                </Text>

                <Text
                    style={{
                        margin: '0',
                        position: 'absolute',
                        left: '10px',
                        bottom: '10px',
                    }}
                >
                    Sender: {sender || 'Not provided.'}
                </Text>
            </Section>

            <Section
                style={{
                    display: 'flex',
                    padding: '20px 0',
                }}
            >
                <Button
                    href={buttonLink || ''}
                    style={{
                        display: 'inline-block',
                        backgroundColor: 'hsl(172, 39%, 65%)',
                        borderRadius: '4px',
                        color: 'hsl(229, 20%, 17%)',
                        fontSize: '16px',
                        fontWeight: 500,
                        textDecoration: 'none',
                    }}
                    pY={8}
                    pX={16}
                >
                    Answer
                </Button>
            </Section>
        </Container>
    </Html>
);

export default EmailPage;
