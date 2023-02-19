# nuxt3-vuetify3-dashboard

> Nuxt 3 + Vuetify 3 + Material Dashboard

[Demo](https://vuetify.srv.rekryt.ru/) - demonstration site

![alt text](http://rekryt.ru/files/nuxt3-vuetify3-dashboard.png)

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
$ npm run start
```

## Docker
```shell
$ docker build -t nuxt_dashboard .
$ docker run -it -e HOST=0.0.0.0 -p 3000:3000 nuxt_dashboard
```
Open http://`docker-machine ip`:3000

For detailed explanation on how things work, check out:
- [Vuetify 3](https://vuetifyjs.com/) documentation
- [Nuxt 3](https://nuxt.com)
- [Material-dashboard](https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html) old documentation
