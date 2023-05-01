# Dream Team Creator

This is a simple application built using the __Express__ framework that allows clients to create a _dream team_ of players. The application can receive __GET__, __POST__, and __PUT__ requests, allowing clients to retrieve information about available players, create new dream teams by selecting a group of players, and update the player information.



### Installation
To use this application, you'll need to have__ Node.js__ and __MySQL__ installed on your machine. Once you have Node.js and MySQL installed, you can _clone_ this repository to your local machine using the following command:

> git clone https://github.com/your-username/dream-team-creator.git

__Once you've cloned the repository, you can navigate to the project directory and install the necessary dependencies by running the following command:__

> npm install


### Configuration
Before running the application, you need to create a _database_ in __MySQL__ and update the _knexfile.js_ with your database configuration. __You can update__ the following fields in the configuration:

>   development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
	  }
    }

To avoid storing sensitive information such as database credentials in plain text in the knexfile.js file, we can use the dotenv package. To use dotenv, create a __.env__ file in the project root directory and add the following lines:

> DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_PORT = 3306
DB_NAME=dream_team

### Usage

__To start the server, you can run the following command:__

 >npm start

Once the server is running, you can access the application by navigating to http://localhost:3000/ in your web browser.

 ### GET Request

To retrieve information about available players, you can send a __GET__ request to http://localhost:3000/players. This will return a page containing information about the available players.


### POST Request

To create a new dream team, you can send a __POST__ request to http://localhost:3000/players or fill out the form in [http://localhost:3000/](http://localhost:3000/) using a _Form_ or in _JSON_ format containing the selected player. The format of the JSON object should be as follows:


> {
  "name": "player name",  
  "country": "player country",  
  "club": "player club", 
  "position": "player position"
}

### Put Request
To update an existing player by name, you can send a __PUT__ request to http://localhost:3000/players/update/:player_name with the following request parameters:

> {
  "name": "player name",  
  "country": "new player country",  
  "club": "new player club", 
  "position": "new player position"
}

### Data Storage

This application uses __MySQL__ to store and retrieve data. The schema for the database is defined in the _schema.sql_ file, and the seed data for the database is defined in the _seed.sql_ file.

### Contributing
If you find any bugs or issues with this application, feel free to open an issue on GitHub or submit a pull request with your proposed changes. We welcome contributions from the community!

### License
This project is licensed under the MIT License. See the LICENSE file for more information.
