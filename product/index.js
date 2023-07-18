import express from 'express';

const app = express();

app.get('/', (req, res, next) => {

  res.statusCode(200).json({
    message: 'Hello from product'
  })
})


const PORT = 8002;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))