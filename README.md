# GMAIL IMAP NODE JS EXAMPLES

This repo goal is to have several examples that helps to development team which works with google oauth.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

What things you need to install the software and how to install them

### Creating A Google Project With The Google API Console

Follow this intructions : [http://support.wpsocial.com/support/solutions/articles/144223-creating-a-google-project-with-the-google-api-console](http://support.wpsocial.com/support/solutions/articles/144223-creating-a-google-project-with-the-google-api-console)

In the section of urls, put this

-  Authorized JavaScript origins
    -  http://localhost:3000
-  Authorized redirect URIs
    -  http://localhost:3000/callback

3000 port is referencial, you could choice your own port but dont forget put in your

```
app.listen(process.env.PORT || my_port);
```

### Node JS

Installing

```
npm intall
```

## Running examples

Launch **01-code-email-access_token.js** with this command :

```
node 01-code-email-access_token.js
```

If no errors in log, go to your browser and launch
```
http://localhost:3000/health
```

And you get

```
Im ready to use!!
```

Endpoints:

| Rest example        | node launch           | endpoint  |	description  |
| ------------- |:-------------:| -----:| -----:|
| 01-code-email-access_token.js      | node 01-code-email-access_token.js | http://localhost:3000/code |  this will redirect to login or acceptance google form. If no errors, code will be printed
| 01-code-email-access_token.js      | node 01-code-email-access_token.js | http://localhost:3000/access_token?code=abcdefghi |  abcdefghi must be the value returned of http://localhost:3000/code. If no errors, access_token will be printed
| 01-code-email-access_token.js      | node 01-code-email-access_token.js | http://localhost:3000/email?code=abcdefghi |  abcdefghi must be the value returned of http://localhost:3000/code. If no errors, email will be printed

## Note

I don-t know why but when you have the code you could execute only one endpoint : /access_token or /email. For example if you try /email, it will be work but after that, if you try /access_token an error will be generated from google apis:

```
{
	statusCode: 400,
	data: '{
		"error": "invalid_grant",
		"error_description": "Code was already redeemed."
	}'
}
```

I will continue my researching :D

## Dependencies

[https://github.com/jrichardsz/gmail-imap](https://github.com/jrichardsz/gmail-imap) forked from [https://github.com/bdickason/gmail-imap](https://github.com/bdickason/gmail-imap)

NPM Package
https://www.npmjs.com/package/gmail-imap

## Versioning

1.0.0

## Authors

* **Richard Leon Ingaruca** - *Initial work* - [Jrichardsz](http://jrichardsz.github.io)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
