import express from 'express'
import exphbs from 'express-handlebars'
import session from 'express-session'
import morgan from 'morgan'
import passport from 'passport'
import flash from 'connect-flash'
import path from 'path'
import { config, helpershbs } from './config.js'
import './helpers/passport.js'

//Routes
import indexRoutes from './routes/index.routes.js'
import signRoutes from './routes/sign.routes.js'
import dashboardRoutes from './routes/dashboard.routes.js'

/***APP***/
const app = express();

app.set('port', config.PORT)
app.use(morgan('dev'));

// Session

app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

// Static files

app.use(express.static(path.join(__dirname, 'public')))

// Set view engine - Handlebars

app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");
app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: ".hbs",
        helpers: helpershbs
    })
);

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});

// Routes
app.use(indexRoutes);
app.use(signRoutes);
app.use(dashboardRoutes);

app.use('*', (req, res) => {
    res.render('404', {
        title: "GikEdu - page not found"
    })
})
export default app