const categories = document.querySelector('#categories')

const categoriesItems = document.querySelectorAll('.item');

const totalCategories = categoriesItems.length;

console.log(`Number of categories: ${totalCategories}`)


categoriesItems.forEach(function (item) {

    const itemTitle = item.querySelector('h2');

    const itemTitleText = itemTitle.textContent;

    console.log(`Category: ${itemTitleText}`);

    const itemsList = item.querySelectorAll('li');
    
    const amountItems = itemsList.length
    console.log(`Elements: ${amountItems}`)

});


