
    const categoriesList = document.querySelectorAll('.item')
console.log(`Number of categories:${categoriesList.length}`)

categoriesList.forEach(function (a) {
        console.log(`Category:${a.firstElementChild.textContent}`);
        console.log(`Elements:${a.lastElementChild.children.length}`);
    });