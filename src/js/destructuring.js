function getAbilities(character) {
  const { special: specials } = character;
  const abilities = [];

  specials.forEach((element) => {
    const {
      id, name: specialName, icon, description = 'Описание недоступно',
    } = element;
    abilities.push({
      id, name: specialName, icon, description,
    });
  });

  return specials;
}

export default getAbilities;
