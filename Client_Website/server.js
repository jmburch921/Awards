var express = require('express');
var webserver = express();
var port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var path = require('path');

//https://github.com/auth0/passport-windowsauth
var passport = require('passport');
var WindowsStrategy = require('passport-windowsauth');
var ensureLoggedIn = require('connect-ensure-login')

var session = require('express-session');
webserver.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: false}));

passport.use(new WindowsStrategy({
    ldap: {
        url: 'ldap://mmcenvdc08.metmom.mmih.biz:389/DC=metmom,DC=mmih,DC=biz',
        base: 'DC=metmom,DC=mmih,DC=biz',
        bindDN: 'sharepointdev',
        bindCredentials: 'M0m3ntum123456'
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

//middleware section
//gets executed on each request
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());
webserver.use(passport.initialize());
webserver.use(passport.session());

//Post for the login form
webserver.post('/login', passport.authenticate('WindowsAuthentication', {
    successRedirect: '/home',
    failureRedirect: '/testerror',
    failureFlash: true,
    session: true
}));

//Client website navigational pages
//Each root patch maps to a relevant folder
// webserver.get('/testsuccess', function (req, res) {
//      console.log("INTO testsuccess.......");
//     isAuthenticated(req, res);   
//     res.sendFile(path.join(__dirname + '/client/index.html'));
// });
//TODO: removed ensureLoggedIn logged in
webserver.get('/testerror',
    function (req, res) {
        console.log("INTO testerror.......");
        res.sendFile(path.join(__dirname + '/client/error.html'));
    });
webserver.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/login.html'));
});


webserver.get('/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/login.html'));
});
webserver.get('/home/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

webserver.get('/people/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/people/people.html'));
});
webserver.get('/people/list', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleList.html'));
});
webserver.get('/people/create', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peoplecreate.html'));
});
webserver.get('/people/view', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleview.html'));
});
webserver.get('/people/edit', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleedit.html'));
});
webserver.get('/people/search', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleSearchList.html'));
});


webserver.get('/programmes/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/programsSpa.html'));
});
webserver.get('/ascriptions/', function (req, res) {
    isAuthenticated(req, res);
    res.sendFile(path.join(__dirname + '/client/pages/ascriptionsSpa.html'));
});
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