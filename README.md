# shavit
A system for Shavit Center for health and a healthy lifestyle

provide your own .env in document root and make database



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
