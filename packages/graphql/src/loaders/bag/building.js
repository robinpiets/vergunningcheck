const { withCache, fetchJson, getUrl } = require("../../util");
const {
  bag: config,
  CACHE_TIMEOUT,
  HOST,
} = require("../../../config").loaders.datapunt;

const TTL = config.cacheTimeout || CACHE_TIMEOUT;

const loader = {
  reducer: (o) => ({
    nationalBuildingId: o.landelijk_id,
  }),
  fetch: (id) =>
    fetchJson(
      getUrl(`${HOST}${config.url}pand/`, { verblijfsobjecten__id: id })
    ).then((data) => data.results.map(loader.reducer)[0]),
  cached: (key) =>
    withCache(`bag:building:${key}`, () => loader.fetch(key), TTL),
  load: async (keys) => keys.map(loader.cached),
};

module.exports = loader;
