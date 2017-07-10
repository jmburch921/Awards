## AWARDS CDN

### How to get the CDN up and running
Install NGINX and cofigure as described below<br/>

#### NGINX server
Add an NGINX server to your cdn:<br/>
Install NGINX<br/>
Add the following in the nginx.conf file un der the http section<br/>
http {<br/>
    include       nginx-cdn.conf;<br/>
<br/>
Add a new file to the folder where the nginx.conf resides, called nginx-cdn.conf<br/>
The source file could be found <a href="https://github.com/roachmanza/Awards/blob/master/Client_Website_CDN/nginx/nginx-cdn.conf">here</a><br/>
<br/>











