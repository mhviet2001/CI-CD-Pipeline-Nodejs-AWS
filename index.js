import express from 'express';
import os from 'os';

const app = express();

app.get('/', (req, res) => {
    const clientIp = req.header('x-forwarded-for');
    const albIp = req.socket.remoteAddress;
    const containerIp = req.socket.localAddress;
    const containerName = os.hostname();
    console.log('CI/CD Pipeline in AWS');
    res.json({
        serviceName: 'Hello my friend, How are you today?',
        contact: 'maihoangviet4869@gmail.com',
        clientIp,
        albIp,
        containerIp,
        containerName,
    });
});

app.get('/admin', (req, res) => {
    const clientIp = req.header('x-forwarded-for');
    const albIp = req.socket.remoteAddress;
    const containerIp = req.socket.localAddress;
    const containerName = os.hostname();
    console.log('CI/CD pipeline in AWS');
    res.json({
        serviceName: 'I am admin',
        contact: 'admin@gmail.com',
        clientIp,
        albIp,
        containerIp,
        containerName,
    });
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error');
});

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});
