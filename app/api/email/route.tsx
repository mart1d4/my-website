import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '../../lib/nodemail';
import { render as EmailRender } from '@react-email/render';
import EmailPage from '../../../emails/email';

export async function POST(req: Request): Promise<NextResponse> {
    const { sender, content }: { sender: string; content: string } = await req.json();

    const getHtml = () => {
        let senderHtml = sender || 'Not Provided';

        // const baseUrl = 'http://localhost:3000';
        const baseUrl = 'https://www.mart1d4.com';

        const page = (
            <EmailPage
                baseUrl={baseUrl}
                content={content}
                sender={senderHtml}
                buttonLink=''
            />
        );

        return EmailRender(page);
    };

    try {
        await transporter.sendMail(mailOptions(sender, content, getHtml()));

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully.',
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong.',
            },
            {
                status: 500,
            }
        );
    }
}
