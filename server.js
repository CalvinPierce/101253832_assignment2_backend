const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js')

const app = express();
const port = process.env.PORT || 8089;

app.use(express.json());

mongoose.connect('mongodb+srv://Calvin:XhNk6ITISKWUm1ir@comp3123.c34yz.mongodb.net/101253832_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});