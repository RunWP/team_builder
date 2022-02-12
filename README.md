# **TeamBuilder v0.1.0**

### *ReactJS (educational project)*

A mini team builder project based on [**Random Data API**](https://random-data-api.com)

## **Project setup**

#### *Install app dependencies*

```sh
npm install
```

#### *Runs the app in the development mode*

```sh
npm start
```

Open [**http://localhost:3000**](http://localhost:3000) to view it in the browser

#### *Builds the app for production to the `build` folder*

It correctly bundles project in production mode and optimizes the build for the best performance

```sh
npm run build
```

## **Docker Desktop project deployment** *(Production only)*

#### *Builds image*
```sh
docker build -t teambuilder_node:lts-alpine .
```

#### *Container instantiation*
```sh
docker run -d --name teambuilder_ctn -p 127.0.0.1:80:8080 teambuilder_node:lts-alpine
```

Open [**http://localhost**](http://localhost) to view it in the browser
