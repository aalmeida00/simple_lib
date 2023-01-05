const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Value cannot be an object');
  }
  return `${key}=${value}`;
};

module.exports.queryString = object =>
  Object.entries(object).map(keyValueToString).join('&');

module.exports.parse = string => 
Object.fromEntries(string.split('&').map(item => {
  let [key, value] = item.split('=')
  if (value.indexOf(',') > -1) value = value.split(',');
  return [key, value];
}))
