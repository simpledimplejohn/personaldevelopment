# Basic NPM front end
I am writing this documentation for myself to get practice setting up a nodejs front end.  Something I can have in case I step away from this platform for a while.

## github setup
do this first

`echo "# SevenDeadlySinsVanilla" >> README.md`
`git init`
`git add README.md`
`git commit -m "first commit"`
`git branch -M main`
`git remote add origin git@github.com:simpledimplejohn/SevenDeadlySinsVanilla.git`
`git push -u origin main`


# Node.js Setup
Do this Second
How to do a basic Node.js front end setup with all of the files

## Setting up NPM
- make sure you have homebrew installed and working `brew -v`
- make sure you have npm installed `npm -v`
- make sure you have nvm installed `node version manager` `nvm -v` check that you have the correct version of node.js
- Navigate to the folder you want to install this in
    - run `npm init`
    - once you have your basic files run
    - run `npm install`

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
## Launching first basic page with a server 
`npm install -g http-server`
`http-server`
`http-server -p 8080`
now go to
`http://127.0.0.1:8080/`
`CTRL-C` to stop the server 

