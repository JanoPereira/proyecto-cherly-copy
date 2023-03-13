const express =require('express');

const app = express();

const path = require('path');

app.set('view engine','ejs');
app.use(express.static('./public'));

//Para que render busque en src/views
app.set('views', path.resolve(__dirname, './views'));

// Para capturar el body
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Express-session
const session = require('express-session');
app.use(session({
    secret: "Conf middleware global session",
    resave: false,
    saveUninitialized: false
}));

// Cookie-parser
const cookieParser =require('cookie-parser');
app.use(cookieParser());

// Mehtod-override --> Para usar put y delete (?_method=...)
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Rutas
const mainRouter = require('./routes/mainRouter.js');
const productRouter = require('./routes/productRouter.js');
const adminRouter = require('./routes/adminRouter.js');

app.use('/',mainRouter);
app.use('/product',productRouter);
app.use('/admin',adminRouter)


// Correr el servidor

const PORT = process.env.PORT || 3500;

app.listen(PORT,()=>{
    console.log(" 🚀 Se levanto proyecto en http://localhost:" + PORT)
})

