# JumbaPOC
 JumbaPOC

> Create bootstrap Laraval

https://laravel.com/docs/5.5/installation#main-content

1) In terminal - composer global require "laravel/installer"
2) In terminal - composer create-project --prefer-dist laravel/laravel <name project>
3) go to directory project
4) start server in terminal - php artisan serve

> Creer db

5) Creer locale DB en pas .env file aan
6) In terminal - php artisan migrate
    - creert alle migrations voor user tables


> Belangrijke start kids add-ons

https://laravel.com/docs/10.x/starter-kits#laravel-jetstream

7) In terminal - composer require laravel/breeze --dev
    - OPTIONAL publishing the authentication views, routes, controllers 
        - php artisan breeze:install
        - php artisan migrate
        - npm install
        - npm run dev
8) ADD VUEJS & Inertia in Ternminal - php artisan breeze:install vue --ssr (server side rendering)



>> Connect to Database on server with SSH

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

- ssh-keygen -t ed25519 -C "b.middelbosch@bm-c.nl"  >> create ssh key
- cat ~/.ssh/id_ed25519.pub | pbcopy >> copieer inhoud van ssh pub key
- Gebruik private key to connect to database


>> NOTES

- npm run dev        >> create FE build and server on localhost
- php artisan serve  >> create local BE server


>> Table creeren

- php artisan make:migration <naam tabel>
- php artisan make:model <naam tabel>

>> Controller creeren

- php artisan make:controller <naam controller>


>> CSS hacks

<!-- 
|  Small (sm:)—640 pixels and up              -> Mobile                                 |
|  Medium (md:)—768 pixels and up             -> Ipad mini and up and landscape mobile  |
|  Large (lg:)—1024 pixels and up             -> Ipad pro and up                        |  
|  Extra large (xl:)—1280 pixels and up       -> Laptop 13i screen                      |
|  Extra extra large (2xl:)—1536 pixels and up-> Desktop screen                         |
-->