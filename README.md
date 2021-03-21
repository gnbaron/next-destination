# Next Destination

This is just a basic app created to mess around with Next.js different rendering strategies.

## Page architecture

```
┌ ● / (ISR: 21600 Seconds)
├   /_app
├ ● /[slug]
├   └ /about
├ ○ /404
└ ● /place/[slug]
    ├ /place/amsterdam
    ├ /place/new-york
    └ /place/kyoto
```

All pages that rely on graphql data use Incremental Static Regeneration (ISR) to build static and revalidate the content after a while (21600 seconds). Considering the fact that we might a have a large number of places (`/place/[slug]`), we generate 3 static pages initially and build the others on demand, revalidating after 6 hours as well. Static pages like `/404` are just generated in build time (SSG).
We also break part of the `/` page rendering to be done on the client side due to the leaflet map relying on the `window` object.

## Running the app

- `yarn dev` run development mode
- `yarn build` build for prod
- `yarn start` run next using the production build
- `yarn codegen` generate the graphql ts types
- `yarn test` run jest
