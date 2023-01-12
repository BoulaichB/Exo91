// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*


// ### 1. Récupère et affiche le premier enfant de la dernière div
const divs = document.getElementsByTagName('div');
let lastDiv = divs[divs.length - 1];
let lastDivFirstChild = lastDiv.children[0];
console.log(lastDivFirstChild);
// ### 2. Récupère et affiche le dernier enfant de la dernière div
let lastDivLastChild = lastDiv.children[lastDiv.children.length - 1];
console.log(lastDivLastChild);
// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
let i = document.querySelector('div:nth-child(5) p i');
console.log(i);
// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
let b = document.querySelector('div:nth-child(5) p:nth-child(3) b');
console.log(b);
// ### 5. Affiche l'élément parent de l'élément i
console.log(i.parentElement);
// ### 6. affiche l'élément parent de l'élément b
// ### 7. affiche l'élément suivant le premier enfant de la dernière div

