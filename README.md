GIT-FEB-2023
Problem Statement
-TRACKING of CHANGES -COLLABORATION

SOLUTION
--VERSION/SOURCE CONTROL

GIT
-GIT is a command line tool offers version control

Application of Source Control
-Source Tree -GITHUB Desktop -Tortoise Git -GitKraken

GIT TOPICS
-Install VSCode -Installing Git -Creating a Repository

Clone the REPO -Configuring Git -Checkout a Branch -Status -Adding Files to a Repository
Stage Files
Committing Files to a Repository
Adding a Remote Repository
Pushing to a Repository
Raise PULL REQUEST
Pull from a Repository
Creating a Branch -Switching Branches -Deleting Branches -Merging -Stash -Git Log
Process
Download GIT
Create Github account
SIGN IN
CREATE REPO
CREATE Empty folder in LOCAL
git init--> CREATE Repo using git bash cmd (No need if you created through github UI)
GIT Account setup using git config --global user.email "you@example.com" and git config --global user.name "Your Name" and git config --global user.password "your password"
Git config command to show your Git username | Email using git config user.name and git config user.email git config user.name
DEVELOPER STEPS
GIT clone using git clone username@host:/path/to/repository.git
GIT command to know repo details git remote show origin
GIT Check out using git checkout -b to create new branch
GIT switch if branch already exist using git checkout to switch.
GIT STATUS to check uncommited changes and Branch Name using git status
GIT commmand to check all available branch and shows current checked out branch using git branch
GIT command to check all available branch and shows current checked out branch and all remote origin branches using git branch -a
GIT command to update the branches/commits from remote to local using git fetch --all
GIT command to check the difference between current and previous version using git diff
GIT Staging using git add <FILENAME/FOLDERNAME> to stage the file
GIT Unstaging using git reset HEAD <filepath/folderpath>
Git Commit using git commit -m -GIT RESET for Undo Commit
soft:- option undo the last commit and preserve changes done to your files and Bring back file to staging git reset --soft HEAD~1
hard:- option undo the last commit and discard all changes in the working directory and index git reset --hard HEAD~1
mixed: option undo the last commit and keep changes in the working directory but NOT in the index git reset --mixed HEAD~1
GIT command to see all commit history using git reflog
GIT Command to delete branch locally using git branch -d localBranchName
GIT command to delete branch remotely git push origin --delete remoteBranchName
GIT command to Add a remote REPO using git remote add origin username@host:/path/to/repository.git
GIT PULL from REMOTE REPO git pull origin master
git branch --set-upstream-to=origin/ feature/header Will establish connection from Remote to Local
GIT PUSH to REMOTE REPO using git push origin -GIT create pull request like username@host:/path/to/repository/pull/
GIVE Access to collaborator username@host:/path/to/repository/settings and click on collaborator then add name.
ONCE PR APPROVED run -git pull origin main to pull latest changes from ORIGN branch
GIT command to save your changes safely in local without committing using stash git stash save "cool work" git stash list git stash apply stash@{stash_index} -GIT STASH is useful when you want to make changes to a file, but you don't want to commit those changes yet