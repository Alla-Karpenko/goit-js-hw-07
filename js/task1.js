
const catogoriesValue = document.querySelector( '#categories' ).children.length;
console.log( `В списке ${catogoriesValue} категории` );
const categoryArray = document.querySelectorAll( `.item` );
for( let elem of categoryArray ) {
    console.log( `Категория: `, elem.firstElementChild.textContent );
    console.log( `Количество элементов: `, elem.lastElementChild.children.length )
};