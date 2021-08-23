const express = require('express');
const dotenv = require('dotenv');           // #1 need further research
const morgan = require('morgan');           // #2 research
const bodyParser = require('body-parser');
const path = require('path');

const app = express()

dotenv.config({path: 'config.env'})         // #1 need further research
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'));                    // #2 research

// parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}))

// set view engine
app.set('view engine', 'ejs')               // #3 what is this?

// load asset
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))      // to make your css works here
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))      
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))      


app.get('/', (req, res) => {
    res.send('Crud Authentication')
})

app.listen(PORT, () => {
    console.log(`Server lisening on port ${PORT}...`)
})