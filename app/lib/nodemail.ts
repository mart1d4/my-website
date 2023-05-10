import nodemailer from 'nodemailer';

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
        subject: `Message from ${subject}`,
        text: text,
        html: html,
    };
};
