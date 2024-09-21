## About This Repository

This repository uses PHP, Javascript React library and Tailwind css to show the demo of an Font Group System.


## Installation

First download this repository. Navigate to root of the project and then

<pre>
    <code>composer install</code>
    <code>npm install</code>
</pre>

Copy the contents of .env.example to .env file. Fill up the database credentials(DB_HOST, DB_NAME, DB_USER, DB_PASS) according to your database. Import font.sql on your database.

Initiate your server by

<pre>
    <code>php -S localhost:8000 -t public</code>
</pre>

Then compile the assets and run development server on a new terminal by

<pre>
    <code>npm run dev</code>
</pre>

Finally browse [localhost:5173](http://localhost:5173) to run the system.