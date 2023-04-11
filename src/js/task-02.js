const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList)

const addIngredientsList = ingredients => {

  ingredients.forEach(function (item) {
    const createList = document.createElement('li');

    createList.textContent = item;

    createList.classList.add('item')

    ingredientsList.append(createList);
    return ingredients

  })

}
console.log(addIngredientsList(ingredients));