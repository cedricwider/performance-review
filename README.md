# Performance Reviews

> Performance Review Web Application

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# start Azure functions
$ cd functions/
$ func start
```

### Running Lambdas locally

In order to test the lambda functions locally, follow these steps:

```bash
$ cd lambdas/
$ yarn generate
$ netlify dev
```
Make sure to uncomment proxy settings in `nuxt.config.js` so that server calls
are not redirected.

Then connect the browser to http://localhost:8888 (instead of 3000).


### Running azure functions locally

In order to start azure functions locally, make sure to have the azure CLI
installed. Then follow these steps:

```bash
$ cd functions/
$ func start
```

## Environment Variables

Export the following environment variables before starting the server:
```bash
export DROPBOX_ACCESS_TOKEN=<secret>
export API_ENDPOINT=http://localhost:7071/api/processReview
export AZURE_FUNCTION_CODE=<secret>
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
