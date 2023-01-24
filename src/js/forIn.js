function orderByProps(object, order) {
  const orderedArray = [];
  order.forEach((element) => {
    if (Object.prototype.hasOwnProperty.call(object, element)) {
      orderedArray.push({ key: element, value: object[element] });
    } else {
      throw new Error();
    }
  });

  const sortedArray = [];
  for (const element in object) {
    if (!order.includes(element)) {
      sortedArray.push({ key: element, value: object[element] });
    }
  }

  sortedArray.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    } return 0;
  });
  return orderedArray.concat(sortedArray);
}

export default orderByProps;
