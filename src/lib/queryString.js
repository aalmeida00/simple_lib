module.exports.queryString = object =>
  Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
