import nodemailer from 'nodemailer';

type AttType = {
    filename: string;
    path: string;
    cid: string;
};

const sender = process.env.EMAIL_SENDER;
const receiver = process.env.EMAIL_RECEIVER;
const password = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sender,
        pass: password,
    },
});

export const mailOptions = (subject: string, text: string, html: string) => {
    return {
        from: sender,
        to: receiver,
        subject: `New message | mart1d4.com`,
        text: text,
        html: html,
    };
};
