const express = require('express')
const app = express()

//<<<<FORM DATA MIDDLEWARE>>>>
// More here: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327#:~:text=a.-,express.,use(express.
// allows form data to be processed into req.body
app.use(express.urlencoded({extended: false}))
// tells express to recognize req.body as a json object
app.use(express.json())

// Include the controller
app.use('/musicians', require('./controllers/musicians'))

// GET /
app.get('/', (req, res)=> {
    res.send('You\'ve hit the home route of the greatest musicians server!')
})

app.listen(8000, ()=>{
    console.log('Yee-haw')
})
