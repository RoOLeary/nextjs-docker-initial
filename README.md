# PicNext Prototype

This is an initial sketch out of the Next.js side of the new [] web instance project. The objective is provide a functional guideline as to how to achieve the implementation of the Picnic web properties using NextJS. Following instance features: 

- NextJS (with Typescript) *caveat - could use improvement
- Built with SCSS - although support for styled-components and css modules
- Includes support for live preview (currently via CraftCMS instance)
- Provides basis for discovery of the idea Docker set up, please read below.
- To follow: further fields and feature support

## How to use

Clone the repo

```
npm install
```

```
npm run dev 
```
will start a local instance on http://localhost:3000

```
npm run build
```
Builds a complete instance

```
npm run start
```
Generates sw.js for local PWA


## Using Docker - boilerplate

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

```

This will build the project as a standalone app inside the Docker image.

## Deploying to AWS

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

