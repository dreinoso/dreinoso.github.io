# Denis Reinoso - Resume

Here I made my own portfolio with React you can visit it at: https://dreinoso.github.io/

## If you think doing something similar

To get this working, the first thing is [creating the React App](https://github.com/facebook/create-react-app). After that you can build your own portfolio from scratch or use some template and start from that, surely you may need to do some important changes to the templete to looks as you wish.

When you have your web app ready, need to install GitHub web pages, here I want to make a clarification, **it is not the same 
to deploy a web page than a user page.** This is actually a user page, if you are trying to deploy a web page, you should do something like [this.](https://github.com/gitname/react-gh-pages)
```
    npm install gh-pages --save-dev
```
Finally you shall know that deploying this on github is a little tricky. Because this is a user page, GitHub try to read the repository in a different way, usually 'd try to find the index.html, since such file does not exist in our react app, we have to do the following.

## Deploying resume on GitHub

1. Create your GitHub repository, **the name is important.** You must put as name "yourgitname.github.io".
2. Create a new branch, let's call it "source".
3. Make source the origin branch, but do not remove master. To change the origin branch go to the repo on GitHub and Settings > Branches > Default Branch has to be source
4. Put all your project on the source branch
5. Add some properties to the app's package.json file.
```
    ...
    "homepage": "https://yourgitname.github.io/"
    ...
    "scripts": {
      ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build -b master"
    }
```

**Here comes the magic!**

6. Go to the project on terminal and run
```
    npm run deploy
```
7. Enter your GitHub credentials
8. Wait some minutes and go to your new own page: https://yourgitname.github.io/ 

## ---------------------------------------

### Feel free to [contact me](https://dreinoso.github.io/#contact) for any question, work, suggestion.

### Have Nice Coding!

### Denis
