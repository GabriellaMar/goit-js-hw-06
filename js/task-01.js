const categories = document.querySelector('#categories')

// console.log(categories)
const categoriesItems = document.querySelectorAll('.item');

// console.log(categoriesItems)


let categoriesCounter = 0;
categoriesItems.forEach(function (item) {

    categoriesCounter += 1;
});

console.log(`Number of categories: ${categoriesCounter}`)



categoriesItems.forEach(function (item) {

    const itemTitle = item.querySelector('h2');

    const itemTitleText = itemTitle.textContent;
    
    console.log(`Category: ${itemTitleText}`);

    const itemsList = item.querySelectorAll('li');
    // console.log(itemsList);

    const amountItems = itemsList.length
    console.log(`Elements: ${amountItems}`)

});


