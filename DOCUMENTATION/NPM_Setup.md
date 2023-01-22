# Basic NPM front end
I am writing this documentation for myself to get practice setting up a nodejs front end.  Something I can have in case I step away from this platform for a while.

## Make the file structure
index.html
/src
/css

## Setup the git repo
Do this third?? 
- add your basic `gitingnore file` in the root directory named `.gitignore`
    ```
    node_modules/
    .DS_Store
    dist/
    coverage/
    .env
    ```

## Setup 
Check your node version `node -v`
Check your npm version  `npm -v`
start project `npm init -y` add's package.json
`npm install` add's package-lock.json (contains all the dependencies)




## Launching first basic page with a server 
`npm install -g http-server`
`http-server`
`http-server -p 8080`
now go to
`http://127.0.0.1:8080/`
`CTRL-C` to stop the server 

