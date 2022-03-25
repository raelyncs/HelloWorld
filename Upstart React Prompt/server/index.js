const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000;

app.use(morgan('dev'));

// could not post to postman without this line: will get 'undefined' in req body of post method because you don't have a middleware to parse the response
app.use(express.json())

//render static files
app.use(express.static(path.join(__dirname, '../client/dist')))


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})