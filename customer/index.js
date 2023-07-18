import express from 'express';

const app = express();

app.get('/', (req, res, next) => {

  res.statusCode(200).json({
    message: 'Hello from customer'
  })
})


const PORT = 8001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))