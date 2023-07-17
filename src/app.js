const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
// app.get('/api/get-next-num', (req, res) => {
//     const { num } = req.body;
  
//     if (!Number.isInteger(num)) {
//       return res.status(404).json({
//         message: 'Invalid number provided!',
//         status: 'failure',
//       });
//     }
  
//     const nextNumber = num + 1;
  
//     res.status(200).json({
//       message: nextNumber,
//       status: 'success',
//     });
//   });
  


// GET endpoint to get the next number from the input 'num'
app.get('/api/get-next-num', (req, res) => {
  const num = parseInt(req.query.num);

  // Check if the 'num' parameter exists and is a valid integer
  if (isNaN(num)) {
    return res.status(400).json({
      message: 'Invalid number provided!',
      status: 'failure',
    });
  }

  // Calculate the next number by incrementing 'num' by 1
  const nextNumber = num + 1;

  res.status(200).json({
    message: nextNumber,
    status: 'success',
  });
});

module.exports = app;


module.exports = app;
