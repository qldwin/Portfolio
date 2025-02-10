require('dotenv').config();
const http = require('http');
const nodemailer = require('nodemailer');
const url = require('url');
const querystring = require('querystring');
const { StringDecoder } = require('string_decoder');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/send-email') {
        const decoder = new StringDecoder('utf-8');
        let data = '';
        req.on('data', (chunk) => {
            data += decoder.write(chunk);
        });
        req.on('end', () => {
            data += decoder.end();
            const parsedData = querystring.parse(data);

            const { name, email, textInput } = parsedData;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: 'aldwin.weber54@gmail.com',
                subject: `Nouveau message sur ton portfolio de ${name}`,
                text: textInput,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Erreur lors de envoi du mail');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Email envoyé avec succès');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée');
    }
});

server.listen(80, () => {
    console.log('Serveur HTTP démarré sur http://localhost:80');
});