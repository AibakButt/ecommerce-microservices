import express from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';


const app = express();

app.use(cors())
app.use(express.json())

app.get('/customer', proxy('http://localhost:8001'))
app.get('/shopping', proxy('http://localhost:8003'))
app.get('/', proxy('http://localhost:8002'))


const PORT = 8000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))