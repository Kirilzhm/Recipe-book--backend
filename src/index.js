import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());




app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
