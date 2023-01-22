# Notes on using github


- `git log --oneline` to get out `control z`
- reset to previous commit and delete current commit (not pushed)
    `--hard HEAD^`
- previous commit to new branch
    `git checkout -b old-state 4879e01` old-state is the new branch, then commit id
- Fix previous commit message not pushed
    `git commit --amend -m "amended message"`
- Create New Branch copy data over
    `git checkout -b new-branch-name`

- Merge to main
    `git checkout main`
    `git pull origin main`
    `git merge oldBranch`
    `git push origin main`




# GIT COMMANDS BACKUP 

Setting up global .gitingnore file
git config --global core.excludesFile '~/.gitignore'

`git init`	initializes git
`git status`
`git diff`	detailed info on status
`git add`		add the file to the git
`git add file1 file2 file3`   add multiple files
`git diff` 	checks to see which files have updates and which don't 
`git commit -m "add the text here, and co-authors"`
`git log`		commit history
`git remote add 	jb http://github.com/simpledimplejohn/project.git`
`git remote -v`	check that its there
`git push (abbreviation) main`	pushes to the main


## Branching
`git branch`	tells you which branch you are in
`git checkout -b newBranch`  adds a new branch

To merge branches:
Go into the branch you want to merge to--then run:
`git merge oldBranch`  (old branch being the branch you are merging from)
`Git branch -D oldBranch`  (deletes the old branch)


`git reset`	?? lets you go back to an old commit
`git clone`	
`git commit --amend` changes last commit

`Git blame` 	compare changes

>> redirects the output of the command on the lefthand side to the file on the right=hand



# Linux notes 
`-` is a flag that adds commands
`start .` 	launches explorer
`cd ~/`  	change directory
`cd ..`      level up one
`cd ../..`	level up two

`pwd` 		prints current location
`mkdir`  	makes a folder
`ls`  		lists everything in the directory -a hidden files
`cd..`		one directory above
`cd ../` 	relative path
`touch`		creates file
`mv`		move and rename
`rm`		deletes files for directories add -rm (force)
`exit`		exits the terminal

## VI editor notes
- starts in command mode--you can do the following here
    - in   `command mode` you can do the following
        - `i` insert mode before cursor
        - `o` insert mode starts a new line
        - `:wq` quit with saving
        - `q!` quit with saving
- `i` to go into insert mode `exp key` to go back to command mode
    - in `insert mode` you can do the following:
        - `ESC` to get out

## CRON NOTES
- Running a cron job on your local mac machine
    `crontab -1` lists
    `crontab -e` edit
    `mail` will list all new cron alerts using the `echo` command
        - `mail` `d 1-11567` to delete mail 1 through 11567
        - `q` to quit
