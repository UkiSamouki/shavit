# shavit
A system for Shavit Center for health and a healthy lifestyle

provide your own .env in document root and make database

you have .example_env file in this repo you can copy content

For now

all users can access admin page because of quick test

you need composer install --for necessary dependencies

sudo npm install  --for necessary dependencies

npm run watch  --to compile everything and to keep compiling when we update something 

 ctrl+c exit if you dont want to cons running

 php artisan migrate   --to make tables

php artisan tinker

factory('App\User', 5)->create(); --to create 5 users for basic UI

exit php tinker

php artisan serve --to boot serve on port 127.0.0.1:8000

Table search and order dont work currently.



API routes

GET /api/users  get collection of users

POST /api/user create user 

example json

{
   
        "name": "example name",
        "email": "example@example.com",
        "phone": "(990) 730-9479 x38378",
        "password": "liverpul12",
        "address": "660 Nedra Ways Suite 567\nSouth Bo, NY 46860"
        
}

PUT /api/user update user

example json

 {
      "email": "update_example@example.com",
      "name": "update_example name",
      "phone": "(990) 730-9479 x38378",
      "address": "660 Nedra Ways Suite 567\nSouth Bo, NY 46860",
      "id": 9
 }

DELETE /api/user delete user

