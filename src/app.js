const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
    const { num } = req.body;
  
    if (!Number.isInteger(num)) {
      return res.status(404).json({
        message: 'Invalid number provided!',
        status: 'failure',
      });
    }
  
    const nextNumber = num + 1;
  
    res.status(200).json({
      message: nextNumber,
      status: 'success',
    });
  });
  

module.exports = app;
