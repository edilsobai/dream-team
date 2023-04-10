# Dream Team Creator

This is a simple application built using the framework expreess that allows clients to create a dream team of players. The application can receive GET and POST requests, allowing clients to retrieve information about available players and create new dream teams by selecting a group of players.

### Installation
To use this application, you'll need to have Node.js installed on your machine. Once you have Node.js installed, you can clone this repository to your local machine using the following command:

> git clone https://github.com/your-username/dream-team-creator.git

__Once you've cloned the repository, you can navigate to the project directory and install the necessary dependencies by running the following command:__

> npm install

### Usage

__To start the server, you can run the following command:__

 >npm start

Once the server is running, you can access the application by navigating to http://localhost:3000/form in your web browser.

 ### GET Request

To retrieve information about available players, you can send a GET request to http://localhost:3000/players. This will return a JSON object containing information about the available players.


### POST Request

To create a new dream team, you can send a POST request to http://localhost:3000/players or fill out the form in [localhost:3000/form](localhost:3000/form) using a ___Form___ or in ___JSON___ format containing the selected player. The format of the JSON object should be as follows:


> {
	name: 'player name',  
	country: "player country",  
	club: "player club", 
	position: "player position"
}


### Data Storage

This application does not currently use a database or other data storage solution. 
So far, the application uses a simple txt file

### Contributing
If you find any bugs or issues with this application, feel free to open an issue on GitHub or submit a pull request with your proposed changes. We welcome contributions from the community!

### License
This project is licensed under the MIT License. See the LICENSE file for more information.
