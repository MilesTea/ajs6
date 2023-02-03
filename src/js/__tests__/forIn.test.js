import orderByProps from '../forIn';

test('test base functionality', () => {
  const testObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expectedArray = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const orderedArray = orderByProps(testObject, ['name', 'level']);
  expect(orderedArray).toEqual(expectedArray);
});

test('test sorting', () => {
  const testObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expectedArray = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const sortedArray = orderByProps(testObject, []);
  expect(sortedArray).toEqual(expectedArray);
});
