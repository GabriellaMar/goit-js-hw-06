const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const list = ingredients.reduce((markup, ingredient) => markup + `<li class = 'item'>${ingredient}</li>`, '')

ingredientsList.insertAdjacentHTML('afterbegin', list)
console.log(ingredientsList)


