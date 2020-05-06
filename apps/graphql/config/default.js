module.exports = {
  port: process.env.PORT || 4000,
  path: "graphql",
  healthPath: "health",
  graphql: { graphiql: false },
  cors: {
    enabled: false,
  },
  cache: {
    dataLoaderEnabled: true,
    requestCacheEnabled: true,
    dnsCacheEnabled: true,
    redis: false,
    // redis: {
    //   url: process.env.REDIS_URL,
    // },
  },
  loaders: {
    datapunt: {
      HOST: "http://api.data.amsterdam.nl",
      CACHE_TIMEOUT: 600,

      bag: {
        url: "/bag/v1.1/",
        cacheTimeout: 600,
      },
      bagSearch: {
        url: "/atlas/",
      },
      geoSearch: {
        url: "/geosearch/",
      },
      monument: {
        url: "/monumenten/",
      },
    },
    zoningPlan: {
      url:
        "http://afnemers.ruimtelijkeplannen.nl/afnemers/services?REQUEST=GetFeature&service=WFS&version=1.0.0&typename=ProvinciaalPlangebied",
      cacheTimeout: 600,
    },
  },
};
