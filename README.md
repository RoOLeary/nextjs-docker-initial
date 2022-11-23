# PicNext Prototype

This is an initial, bare bones sketch out of a Next.js site. The objective is provide a functioning, demoable guideline as to how to implement the future Picnic web properties. Following instance features: 

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

## Data Fetching Examples: 

#### Get Static Props

Within the pages directory, the "about" and "all-components" instances (pages/about.tsx, pages/all-components.tsx) - illustrate
the getStaticProps method to retrieve content from the headless data source. This uses ISR (Incremental Static Regeneration) - meaning that content can be modified in the CMS for static pages, without the need to trigger production releases.

Currently set to revalidate at 10 second intervals. 

#### Get ServerSideProps Example: 

Also works for content which may need to render a page whose data must be fetched at request time. This could be due to the nature of the data or properties of the request (such as authorization headers or geo location). Pages using getServerSideProps will be server side rendered at request time and only be cached if cache-control headers are configured. 

*Caveat: illustrative purposes. There is also the ability to serve wholly static content via the getStaticProps method, and still leverage the features of a headless CMS - live preview, publication without release. 


#### Styles: 

Support for the rudiments of an scss based style-guide - see styles directory. sections/concerns split to self-contained files. 
Support also for CSS modules (example: Loader.module.css )
Support for component-level implementation of Styled-Components (components/Test.tsx) - just a simple header that can be modified based on props provided. 

## PWA support
For illustrative purposes, this instance (and Next.js) supports Progressive Web App capabilities. This is currently working for this demo. 
Visiting the page in a browser should give you the prompt to download.


## Additional Features to follow/nice to haves. 

-  Authentication/log-in system
-  Support for multi-lingual envs
-  Additional UI features and components (to work towards a 1:1 representation of existing components
-  Implementation of Jest for unit tests
-  Integration of Storybook. Platform for storage, documentation and standardisation of UI components across the Picnic infrastructure.
-  Better linting
-  Agreed coding standards
