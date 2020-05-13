# Google Oauth Api Usage

This repo goal is to have several examples that helps to development team which works with google oauth.


# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

What things you need to install the software and how to install them

- Node JS
- Google console configurations :   https://console.developers.google.com

# Google console configurations

**Creating A Google Project With The Google API Console**

Follow this intructions : [http://support.wpsocial.com/support/solutions/articles/144223-creating-a-google-project-with-the-google-api-console](http://support.wpsocial.com/support/solutions/articles/144223-creating-a-google-project-with-the-google-api-console)

In the section of urls, put this

-  Authorized JavaScript origins
    - http://localhost:3000
    - Note that this value must be the base url of your web. In this case nodejs
-  Authorized redirect URIs
    - http://localhost:3000/callback
    - Note that this value is **published** in your web (demo-oauth.js line 28)

3000 port is referencial, you could choice your own port with **PORT** variable

```
app.listen(process.env.PORT || my_port);
```

# Update credentials and scope

Export this values:

```sh
export CLIENT_ID="****"
export CLIENT_SECRET="****"
export REDIRECT_URI="****"
export SCOPE="****"
export PORT=3000
```

scope could be one of these values:

- read
- profile
- https://www.googleapis.com/auth/userinfo.email

Note that this value is a kind of **requested permission** : 

Google, can I use your api rest to get the **info (email, name, etc)** of logged in user?

# Run

Launch **demo-oauth.js** with one of these commands :

```
npm run start
node demo-oauth.js
```

If no errors in log, go to your browser and launch
```
http://localhost:3000/health
```

And you will get

```
Im ready to use!!
```

# Endpoints

| Step         | endpoint  |	description  |
| ------------- |: -----:| -----:|
| 01 : Get oauth code | http://localhost:3000/code |  this will redirect to login or acceptance google form. If no errors, code will be printed
| 02 : Exchange oauth code for the access_token     | http://localhost:3000/access_token?code=abcdefghi |  abcdefghi must be the value returned in step 1
| 03 : Exchange oauth access_token for the email  | http://localhost:3000/email?access_token=123456789 |  123456789 must be the value returned in step 2


# Note

- **code** value returned in step 1, works just one time. You will need to consume **/code** for every time yo test the step 2 or step 3


# Versioning

1.0.0

# Authors

* **Richard Leon Ingaruca** - *Initial work* - [Jrichardsz](http://jrichardsz.github.io)


# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Acknowledgments

* Inspiration :  https://www.npmjs.com/package/gmail-imap
