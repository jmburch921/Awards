var express = require('express');
var webserver = express();
var port = process.env.PORT || 4001;
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var WindowsStrategy = require('passport-windowsauth');
var ensureLoggedIn = require('connect-ensure-login')

var session = require('express-session');
webserver.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false
}));

//https://github.com/auth0/passport-windowsauth
passport.use(new WindowsStrategy({
    ldap: {
        url: 'ldap://xxxxx:xx/xx',
        base: 'xxx',
        bindDN: 'xx',
       bindCredentials: 'xx'
        

    },
    integrated: false
}, function (profile, done) {
    console.log("INTO PROFILE");
    if (profile) {
        console.log("profile SUCCESS");
        user = passport.serializeUser(function (profile, done) {
            done(null, user);
        }); //profile.user;
        console.log("========================================= ADONE ============");
        console.log(done);
        console.log(profile)
        //debugger;
        return done(null, user);
    } else {
        console.log("profile ERROR");
        return done(null, false);
    }
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

//MIDDLEWARE SECTION
webserver.use(bodyParser.urlencoded({
    extended: true
}));
webserver.use(bodyParser.json());
webserver.use(passport.initialize());
webserver.use(passport.session());

//POST: Login form
webserver.post('/login', passport.authenticate('WindowsAuthentication', {
    successRedirect: '/home',
    failureRedirect: '/loginerror',
    failureFlash: true,
    session: true
}));

//GETS: Login and authorisations
webserver.get('/loginerror', function (req, res) {
    console.log("An error occured with a login");
    res.sendFile(path.join(__dirname + '/client/error.html'));
});
webserver.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/login.html'));
});
webserver.get('/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/login.html'));
});

//GETS: Home page
webserver.get('/home/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

//GETS: People pages
webserver.get('/people/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/people.html'));
});
webserver.get('/people/list', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleList.html'));
});
webserver.get('/people/create', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/peoplecreate.html'));
});
webserver.get('/people/view', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleview.html'));
});
webserver.get('/people/edit', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleedit.html'));
});
webserver.get('/people/search', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleSearchList.html'));
});

//GETS: Program pages
webserver.get('/programmes/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/programsSpa.html'));
});

//GETS: Ascription pages
webserver.get('/ascriptions/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/ascriptionsSpa.html'));
});

//GETS: Public pages pages
webserver.get('/about/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/info/about.html'));
});
webserver.get('/contactus/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/info/contactus.html'));
});



//Listen on port number
webserver.listen(port);
console.log('Award site server started on: ' + port);


var isAuthenticated = function (req, res, next) {
    if (req.user) {
        console.log("isAuthenticated : " + req.user);
        // console.log("authed" + req.user.displayName);
        return next;
    } else {
        res.sendFile(path.join(__dirname + '/client/login.html'));
        //   return res.status(401).json({
        //     error: 'User not authenticated'
        //   })
    }
}