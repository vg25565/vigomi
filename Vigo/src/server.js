import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001;

const SMTP_SERVER = 'smtp.gmail.com';
const SMTP_PORT = 587;
const EMAIL_ADDRESS = 'vg2556519@gmail.com';
const EMAIL_PASSWORD = 'fikr psxl lbxv njiv';

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

app.post('/send_email', (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: SMTP_SERVER,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: EMAIL_ADDRESS,
            pass: EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: EMAIL_ADDRESS,
        to: EMAIL_ADDRESS,
        subject: 'New Contact Us Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Failed to send email: ' + error.toString());
        }
        res.send('Email sent successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
