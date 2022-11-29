module.exports.queryString = object =>
  Object.entries(object)
    .map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        throw new Error('Value cannot be an object');
      }
      return `${key}=${value}`;
    })
    .join('&');
