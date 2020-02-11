# Eureka
An idea-generator where people (general public) can post an app idea.

### Project Overview

#### Problem:

Developer/coders often do not consider the software from the end user's point of view, and thus, they can miss-code some features. 

This app can solve this problem by creating an easy communication channel between the user (the idea creator) and the coder (the solver) without the coder having to share the user's experience themselves.

#### Concept:
An idea-generator where people (general public) can post an app idea.

#### Features:

- People can create posts about wanting an app that can solve a problem they are experiencing.
- Other people can then upvote their ideas.
- Developers can develop apps by picking the ideas they really like
  - The developer who picks up this idea can link their app (Github reps) under the idea post.
  - Other developers can help in the creation of this app, thus, encouraging collaboration.

### (Desktop) UI

##### /ideas
![](img/3.jpg)

##### /ideas/:id
![](img/2.jpg)

##### /user/:id
![](img/4.jpg)



### Development Status

The backend API is complete. I am in the process of creating the front-end user interface using Material UI and React. Once I am done with that, I will integrate the backend with front-end using Redux and Axio.

### How to run the front-end locally?
- ``` cd client ```
- ``` npm install ```
- ```npm start```

### keys_dev.js needs to be created in the config folder:
```
module.exports = {
   mongoURI: 'CHANGE_ME',
   secretOrKey: 'secret'
}
```

