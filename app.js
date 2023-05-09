const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const app = express();

const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.engine(
//     'hbs',
//     expressHbs.engine({
//       layoutsDir: 'views/layouts/',
//       defaultLayout: 'main-layout',
//       extname: 'hbs'
//     }));
//   app.set('view engine', 'hbs');
//   app.set('views', 'views');

app.use('/user', userRoutes)

app.use('/*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
   console.log(`listening on port ${port}`);
})   