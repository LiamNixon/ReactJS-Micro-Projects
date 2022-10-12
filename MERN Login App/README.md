# Simple log in page app
##### Created by Liam Nixon.
This app simulates the process of logging in to an online portal and makes use of the MERN technology stack to accomplish a functional back-end, integrated with MongoDB Atlas.

### Features
#### Log in
Log in using standard credentials (username/password), the portal will inform you if the username does not match any existing in the database, or if the supplied password is incorrect. Additionally, it makes use of basic input validation, to confirm that a username/password have been input. If all of the requisite criteria are met, a message will display, informing you of a successful log in.

#### Create account
You can create a new account with a simple username/password form, which will allow you to log in to the system. The credentials are stored on the associated MongoDB Atlas database, to be used for validating log in attempts. Passwords that are input are stored as *encrypted hashes*, thanks to the **bcrypt** node module, for security purposes. The form also performs several checks, to ensure that credentials are entered, passwords meet minimum requirements (contains uppercase, numbers and symbols) and that the specified username is not already present within the system.

#### Error page
If you happen to get lost, (by deliberately changing the URL to something else), you will be taken to an error page with the option to return to the home page from there.

### Used in this project
#### MERN stack
- **MongoDB**
- **Express**
- **React**
- **Node**

#### Client-Side modules
- **Axios**
 
#### Server-Side modules
- **Bcrypt**
- **Cors**
- **Dotenv**
- **Mongoose**

#### Styling
- **Tailwind**