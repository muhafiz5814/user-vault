# UserVault

A User Management Dashboard.  

### Functionalities and Features
- It displays a list of users with details such as ID, Username, First Name, Last Name, E-mail and Company Name.  
- Provides buttons to `Add`, `Edit` and `Delete` users.
- Uses a common form component to `create` user and `update` user details.
- Integrates a mock backend API for dummy data.
- Handles request failure or data fetching errors and show appropriate message to the end user.

## Setup and Run
- First Fork the project to include it in your repositories.
  - See how to fork [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

- Clone the repo in your local machine.
  - Open CLI or terminal and go to the directory you want to clone the project in, and then type following command. (Replace `<YOUR_GITHUB_USERNAME>` with your own github username)
    
  ```bash
    git clone https://github.com/<YOUR_GITHUB_USERNAME>/user-vault.git
  ```
  - See how to clone [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Open project in any code editor of your choice, open terminal and then install dependencies using following command:
  ```bash
    npm install
  ```

- This project uses [{JSON} Placeholder](https://jsonplaceholder.typicode.com/), a free, fake and reliable API for testing and prototyping. So, there is no need to run any backend server.

- To start development server, run following command:
  ```bash
    npm start
  ```
- Hurray! You have successfully cloned and started the project in localhost environment.
- If you want to make any changes or code optimizations, create an issue [here](https://github.com/muhafiz5814/user-vault/issues).
- If got assigned, make changes and make a PR mentioning the issue solved.

## Challenges faced
- First and one of the biggest challenge for me while building this project was lack of time. There were some unavoidable reasons due to which I was not able to start working on this project on right time and got only one night to complete the project. I woke up whole night and try to build every feature which was asked in the problem statement and thankfully I was able to do so.
- Second challenge for me was to understand updated libraries and frameworks version since I last installed and used them thankfully I was able to understand quickly and apply those changes in my project.
- Third challenge I faced while building this project was to implement a logic to create user and edit the user. It was because of the complex and nested structure of User object and it becomes difficult to manage state of this type of complex data structure.

## Possible improvements
- I tried my best to keep breaking code in short modules, but due to lack of time it was not fully modularized, if I get more time I am sure I can modularize the code more.
- Better UI can be made.
- Client side validation can be done.
- Code repeatation can be minimized.

