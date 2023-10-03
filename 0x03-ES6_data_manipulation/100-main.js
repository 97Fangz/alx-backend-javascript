const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  const key = JSON.stringify(endpoint);
  let total = weakMap.get(key) || 0;
  weakMap.set(key, total + 1);

  if (total >= 4) {
    throw new Error('Endpoint load is high');
  }

  return total;
};

export { weakMap, queryAPI };
