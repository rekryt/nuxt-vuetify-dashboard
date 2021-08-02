# nuxt-vuetify-dashboard

> Nuxt.js + Vuetify.js + Material Dashboard

![alt text](http://rekryt.ru/files/nuxt-vuetify-dashboard.png)

## Build Setup

```shell
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev
```
Open http://localhost:3000

## Production
```shell
# build for production and launch server
$ npm run build
$ npm start

# or generate static project
# npm run generate
```

## Docker
```shell
$ docker build -t nuxt_dashboard .
$ docker run -it -e HOST=0.0.0.0 -p 3000:3000 nuxt_dashboard
```
Open http://`docker-machine ip`:3000

For detailed explanation on how things work, check out:
- [Material-dashboard](https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html) documentation
- [Vuetify.js](https://vuetifyjs.com/) documentation
- [Nuxt.js](https://github.com/nuxt/nuxt.js)
