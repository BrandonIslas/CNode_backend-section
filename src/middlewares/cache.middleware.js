const mcahce = require("memory-cache");
const { CACHE_KEY } = require("../config");

module.exports = function (duration) {
  return (res, req, next) => {
    const key = CACHE_KEY + req.originUrl || req.url;
    const cachedBody = mcahce.get(key);

    if (cachedBody) {
      return res.send(JSON.parse(cachedBody));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcahce.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};
