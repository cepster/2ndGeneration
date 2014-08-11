Prerequisites:
    nodeJS is installed
    grunt-cli is installed globally: npm install -g grunt-cli

To Build and Deploy:
	Create a .ftppass file to store username and password for upload directory in this format:

	{
  	"key1": {
	    "username": "user.name",
	    "password": "password"
	  }
	}   

	execute: grunt deploy 