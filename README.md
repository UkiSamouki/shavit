# shavit
A system for Shavit Center for health and a healthy lifestyle

provide your own .env in document root and make database

my example

APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:BHPFjUcwzS4vMms72UpCnItCpwHyHneSOQrlGvBLZGg=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE= shavit
DB_USERNAME= ukijaki93
DB_PASSWORD= liverpul12

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"


For now

all users can access admin page because of quick test

you need composer install --for necessary dependencies

sudo npm install  --for necessary dependencies

npm run watch  --to compile everything and to keep compiling when we update something

 php artisan migrate   --to make tables

php artisan tinker

factory('App\User', 5)->create(); --to create 5 users for basic UI

exit php tinker

php artisan serve --to boot serve on port 127.0.0.1:8000

Table search and order dont work currently.
