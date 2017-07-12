var express = require('express');
var webserver = express();
var port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var path = require('path');
 //https://github.com/auth0/passport-windowsauth
var passport = require('passport');
var WindowsStrategy = require('passport-windowsauth');

passport.use(new WindowsStrategy({
  ldap: {
    url:             'ldap://wellscordoba.wellscordobabank.com/DC=wellscordobabank,DC=com',
    base:            'DC=wellscordobabank,DC=com',
    bindDN:          'someAccount',
    bindCredentials: 'andItsPass'
  },
  integrated:      false
}, function(profile, done){
  User.findOrCreate({ waId: profile.id }, function (err, user) {
    done(err, user);
  });
}));

//middleware section
//gets executed on each request
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());

webserver.post('/login',
  passport.authenticate('WindowsAuthentication', {
                                  successRedirect: '/home/',
                                  failureRedirect: '/login',
                                  failureFlash:    true })
);
//Client website navigational pages
//Each root patch maps to a relevant folder
webserver.get('/test',  passport.authenticate('WindowsAuthentication'), function (req, res){
    if(err){
    console.log("error" + err.message);
    }else{
        res.sendFile(path.join(__dirname + '/client/index.html'));
    }    
});
webserver.get('/express-passport',  passport.authenticate('WindowsAuthentication'), function (req, res){
    res.json(req.user);
});
webserver.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/login.html'));
});
webserver.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/login.html'));
});
webserver.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/people/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/people.html'));
});
webserver.get('/people/list', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleList.html'));
});
webserver.get('/people/create', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peoplecreate.html'));
});
webserver.get('/people/view', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleview.html'));
});
webserver.get('/people/edit', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleedit.html'));
});
webserver.get('/people/search', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleSearchList.html'));
});


webserver.get('/programmes/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/programsSpa.html'));
});
webserver.get('/ascriptions/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/ascriptionsSpa.html'));
});
webserver.get('/about/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/info/about.html'));
});
webserver.get('/contactus/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/info/contactus.html'));
});


//Listen on port number
webserver.listen(port);
console.log('Award site server started on: ' + port);