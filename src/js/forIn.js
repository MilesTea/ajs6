function orderByProps(object, order) {
  const keys = Object.keys(object);
  const unsortedKeys = [];
  const unorderedKeys = [];

  keys.forEach((key) => {
    if (order.includes(key)) {
      unorderedKeys.push(key);
    } else {
      unsortedKeys.push(key);
    }
  });
  const orderedArray = order.filter((element) => unorderedKeys.includes(element));
  unsortedKeys.sort();

  const finalKeys = orderedArray.concat(unsortedKeys);
  const finalArray = [];
  finalKeys.forEach((key) => {
    const tempObj = {};
    tempObj.key = key;
    tempObj.value = object[key];
    finalArray.push(tempObj);
  });

  return finalArray;
}

export default orderByProps;
