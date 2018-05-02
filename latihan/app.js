const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
let ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', '/views')


//============ helper=========

app.use( (req, res,next) => {
  res.locals.data = require('./helper')
  next()
})
// app.locals.checkNull = require('./helper')


//========= static =========
const indexRouter = require('./routes/index.js');
app.use('/', indexRouter)


//========== show singer table =======

const singerRouter = require('./routes/singer.js');
app.use('/singers', singerRouter)

const songRouter = require('./routes/song.js');
app.use('/songs', songRouter)



app.listen(3000)
