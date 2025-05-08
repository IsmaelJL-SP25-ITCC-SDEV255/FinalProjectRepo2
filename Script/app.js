import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/Home.html', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'Home.html'));
});

app.get('/Login.html', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'Login.html'));
});

app.get('/Register For Class.html', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'Register For Class.html'));
});

app.get('/Schedule.html', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'Schedule.html'));
});

app.get('/Cart.html', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'Cart.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});