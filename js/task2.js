
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const listRef = ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    return liRef;
});
ingredientsRef.append(...listRef);
console.log(ingredientsRef);


