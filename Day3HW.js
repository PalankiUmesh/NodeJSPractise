const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send("Welcome to NODE JS Tutorial")
// })

// app.listen(3000, () => {
//     console.log("Server is lisiting")
// })

// Question-2
// const data = '{"name" : "Alice", "age": 25, "hobbies" : ["reading", "painting"]}';
// const data_to_json = JSON.parse(data)
// console.log(data.age)
// const objData = {"title" : "Book", "pages" : 200};
// const converting_ObjData_to_JSON = JSON.stringify(objData)
// console.log(converting_ObjData_to_JSON)

app.get('/weather', (req, res) => {
    const weatherData = {
      temperature: 25,
      conditions: 'Sunny',
      city: 'Los Angeles'
  };
    res.json(weatherData);
  });
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });