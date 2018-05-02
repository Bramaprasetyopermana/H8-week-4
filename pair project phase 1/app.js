const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session');
let menuRoutes = require('./routes/menu')
let packetRoutes = require('./routes/packet')
let homeRoutes = require('./routes/home.js');
let customerRoutes = require('./routes/customer.js');
let adminRoutes = require('./routes/admin.js');
let loginRoutes = require('./routes/login.js')
let logoutRoutes = require('./routes/logout.js')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

app.locals.calories_Counter = require('./helpers/total_calories') 

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/login',loginRoutes)
app.use('/customer',customerRoutes)
app.use('/menus', menuRoutes)
app.use('/packets', packetRoutes)
app.use('/admin',adminRoutes)
app.use('/logout',logoutRoutes)
app.use('/',homeRoutes)

app.listen(3000)