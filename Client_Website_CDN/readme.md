## AWARDS CDN

### How to get the application up and running
Install NGINX and cofigure as described below<br/>

### Other dependencies

#### NGINX server
Add an NGINX server to your cdn:<br/>
Install NGINX<br/>
Add the following in the nginx.conf file un der the http section<br/>
http {<br/>
    include       nginx-cdn.conf;<br/>
<br/>
Add a new file to the folder where the nginx.conf resides, called nginx-cdn.conf<br/>
<br/>

####Copy the contents below into that file:<br/>
upstream backend {<br/>
server localhost:3002;<br/>
}<br/>

server {<br/>
listen 8001;<br/>
server_name localhost;<br/>

root /var/tools/public;<br/>

location / {<br/>
try_files $uri @backend;<br/>
}<br/>

location @backend {<br/>
proxy_pass http://backend;<br/>
proxy_set_header X-Real-IP $remote_addr;<br/>
proxy_set_header Host $host;<br/>
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<br/>
proxy_http_version 1.1;<br/>
proxy_set_header Upgrade $http_upgrade;<br/>
proxy_set_header Connection "upgrade";<br/>
}<br/>
}<br/>
<br/>











