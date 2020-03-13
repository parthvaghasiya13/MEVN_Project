# Vue.js based one page web-application

### Introduction

This project is a one-page web-application which is based on Vue.js. This web-application queries https://picsum.photos/v2/list, parses the JSON, and displays the images as a gallery with the author's name below each image by using axios-vue.

This site works well on PC, laptop, mobile device and tablet browsers.

To easily build this application, a Dockerfile is present. Please find the instructions of how to build this project on your machine at the end of this document.

Checkout the live web-application running on the docker instance: http://45.63.64.106/

Note: In the navbar, Fii-USA's logo, and some external links have been used for demonstration purpose.

### Technology stack:
- Frontend: Vue.js with bootstrap, Vuex, Vue Router
- Backend: node.js
- API calls: axios
- Infrastructure: Docker

## Project setup using Dockerfile
```bash
# clone git repo
git clone https://github.com/parthvaghasiya13/mevn_project.git

# go to the directory
cd mevn_project

#build the docker container named vue-docker-container
docker build -t vue-docker-container .

#run the container
docker run -p 8080:80 vue-docker-container
```

You can check the web-application running on your localhost at port 8080 i.e. http://localhost:8080/ .

Checkout more commands of Docker: https://docs.docker.com/engine/reference/commandline/docker/ .

Note: 
```
For Windows 10 Home users, due the unavilibility of Hyper V, users can use Docker Toolbox on Windows from here: https://docs.docker.com/toolbox/toolbox_install_windows/

You will have to follow the same steps as above on Command Prompt, except in Toolbox, nothing will be on http://localhost, you can access the content on http://192.168.99.100 by default, since it's running a Linux VM in VirtualBox. Also, 

So, after running docker file, you can check the content by going to http://192.168.99.100:8080 .
```


