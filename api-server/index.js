const express = require('express');
const {getNumbers} = require('./util.js');
const app = new express();
const port = 3000;
const greeting = 'Hello, World';
app.get('/number/min', (req, res) => { //find the avg, sort, count (need to return how many occurences of the number)
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)
    // const max = Math.min(num1, num2)
    // if (isNaN(num1) || isNaN(num2)) {
    //    return res.json({message: 'NaN filtered out!'})
    // }
    // const max = num1 < num2 ? num1 : num2;
    // console.log(num1 < num2 ? num1 : num2)
    const {status, data} = getNumbers(num1, num2);
    const avg = calculateAverage(num1, num2);
    const sorted = sortNumbers(num1, num2);
    const count = countOccurrences(num1, num2);

    res.json({
        number: data,
        average: avg,
        sorted: sorted,
        count: count
    });
    // if (status === 400) {
    //     return res.status(400).json(data);
    // }
    // res.json({ message: data })  
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})