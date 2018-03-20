# Data Layer Server

### Installation

You first need Node.js and npm installed.

Next you need Gulp installed globally.

```sh
$ npm install -g gulp
```

Get the repository, install the required npm modules including those listed in the dev-dependencies.

```sh
$ npm install
```

### Starting the Server

The server can be started by simply running default gulp task:

```sh
$ gulp
```

NOTE: Default running mode in this case is the development mode, i.e. NODE_ENV='development'.
Running the build process in production mode will have less logs in the console. For switching into
production mode, pass the --production flag to gulp tasks.

```sh
$ gulp --production
```

Gulp starts the server by applying the default configuration file. In development mode it is
[server-local.json](src/config/server-local.json), whereas in production mode the server is
configured to use [server.json](src/config/server.json) file. In order to run the server via custom
config file, pass the relative path to your \*.json file after the -c flag to gulp.

```sh
$ gulp -c \src\config\<filename>.json
```

### Watching

By default, gulp runs the server using 'gulp-nodemon'. Nodemon automatically watches the relevant
files and restarts the server with 5s delay if there is a change.

### Linting

To improve the quality of the code it is linted (checks for code style and errors) on every build
automatically. If at any time you want to check the quality of the code run the following command:

```sh
$ gulp lint
```

### Complete Data Layer (server + config UI)

In order to run the full data layer product, i.e. the data layer server and its management UI system, use the following command:

```sh
$ gulp all
```

### Testing

...

### Updating NPM modules

:warning: Please, do not upgrade packages. This may cause compatibility issues, 
especially if there was a major version update.
