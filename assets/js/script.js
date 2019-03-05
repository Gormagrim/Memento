// exercice 4
// On déclare une fonction
// on crée une fonction displayInformations que l'on va déclencher au clic pour recuperer et afficher la valeur de nos "inputs"
function displayInformations(){
  // dans le document HTML (document) tu recupere l'element grace à son ID =>(getElementById) ('ex :lastname)
  // ici on ne recupere que la valeur de l'element grace à .value
  // on stocke la valeur recuperée dans une variable (avec var etc ...)
  // evenement = içi onclick
  // un evenement appel à une fonction

  // Ici je declare mon regex qui va permettre de securiser le code
  var regexName = /^[a-zA-Z ]+$/;
  // le + permet de dire que c'est indefini, on demande pas un nombre de caractère
  // l'espace après le Z permet de mettre des prénoms noms ect avec un espace etc New York
  // a-z ... permet de ne demander que des lettres et le tiret après pour les prénoms composés
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  // avec if je declare la condition qui permettra de retourner un message selon ce que j'ai entré dans les cases
  if (lastname.match(regexName) && firstname.match(regexName) && city.match(regexName)){
    alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' + city);
    // Sinon la boite de dialogue affichera que ce n'est pas autorisé
  }else {
    alert('Ceci n\'est pas autorisé');
    // \ après n evite de prendre la suite comme une cote
  }
}

// exercice 5
function multiplyReal() {
      var firstNumber = document.getElementById('firstNumber').value; //type string
      var secondNumber = document.getElementById('secondNumber').value; // type string
      //isNan(parameter) is Not a Number
      // ! NOT//Sinon
      // Condition
      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        // On se sert du modulo pour déterminé si le nombre est à virgule. si le reste est différant de 0 alors c'est un nombre à virgule
        if (Number(firstNumber) % 1 !== 0 && Number(secondNumber) % 1 !== 0) {
          firstNumberInteger = Math.trunc(firstNumber);
          result = firstNumberInteger * secondNumber;
          alert(result);

        } else {
          alert('ce sont des nombres entiers');
        }
      } else {
        alert('attention ce ne sont pas des nombres');
      }
    }

//exercice 6
// déclare la fonction
function exerciceSix() {
  var firstNumberExoSix = document.getElementById('firstNumberExoSix').value;
  var secondNumberExoSix = document.getElementById('secondNumberExoSix').value;
  // isNaN permet de déterminer la valeur de NaN
  // le double egal est une comparaison
  // dans cette condition on verifie que c'est bien des chiffres de deux manières différentes avec false et le ! (en therme de sécurité)
  if(isNaN(firstNumberExoSix) == false && !isNaN(secondNumberExoSix)){
    // condition: le second chiffre ne doit pas être un zero car on ne divise pas par zero
    if(secondNumberExoSix != 0){
      // dans le resultat on veut le reste avec le modulo
      var result = firstNumberExoSix % secondNumberExoSix;
      alert(result);
      //
    }else{
      alert ('Merci de ne pas diviser un nombre par zero');
    }
  }
  else {
    alert ('Merci de remplir les champs avec des nombres');
  }
}

//  exercice 7
    function exerciceSeven() {
      var shoeSize = document.getElementById('shoeSize').value;
      var yearOfBirth = document.getElementById('yearOfBirth').value;
      // On verifie que la saisie utilisateur soit bien des nombres
      if(!isNaN(shoeSize) && !isNaN(yearOfBirth)){
        // condition : des tailles de pointures comprisent entre 34 et 52 et que l'année de naisance soit comprisent entre 1900 et 2019
        if((shoeSize >= 34 && shoeSize <= 52) && (yearOfBirth >= 1900 && yearOfBirth <= 2019)){
          var result = shoeSize * 2;
          result += 5;
          // On aurait pu écrire également : result = result + 5
          result *= 50;
          result -= yearOfBirth;
          result += 1766;
          alert (result);
        }else{
          alert('La pointure et la date de naissance ne sont pas correctes');
        }
      }else{
        alert ('Merci de saisir des nombres');
      }
    }

// exercice 8
function exerciceHeight(){
  var age = document.getElementById('age').value;
//Je vérifie que l'âge est écrit en chiffres
  if(isNaN(age) == false){
    //Je vérifie que l'âge est infèrieur à 114 et supérieur à 0
    if ( age < 114 && age > 0) {
      // Vérifie la majorité
      if (age >= 18){
        alert('Vous êtes majeur');
      }else{
        alert('Vous êtes mineur');
      }
    }else {
      alert('Age non valide');
    }
  }else{
    alert('En nombres stp');
  }
}


// exercice 1 partie 2
// Cette fonction permet de changer l'image au survole.
// On déclare la fonction avec comme nom: changeimage
function changeImgExoOne() {
// on récupère la source de la seconde image
document.getElementById('image').src='assets/img/image1_2.jpg';
}

// exercice 2 partie 2
// On déclare la fonction avec comme nom: lossfocus
// afficher une boite de dialogue avec le message : "Merci de votre participation" quand le champ de saisie perd le focus.
function lossfocus() {
  alert('Merci de votre participation');
}

// exercice 3 partie 2
// afficher une boite de dialogue avec la valeur du champ dès que l'on appuie sur le clavier.
function InputValue() {
// on veut récup la valeur du champs à l'évenement c'est pour ça que la variable est à cette endroit
// on ajoute .value pour récupérer la valeur de l'élément
  var lastnameValue = document.getElementById('lastnameValue').value;
  alert(lastnameValue);
}

//exercice 4 partie 2
// faire que le bouton RAZ efface les données des champs du formulaire.
function wipeOff(){
document.getElementById('lastnameclick').value = '';
document.getElementById('firstnameclick').value = '';
document.getElementById('cityclick').value = '';
}
// value='' permet de supprimer les valeurs


//exercice 5 partie 2
// fonction permettant de changer les images au survol de chacune d'entre elles
function switchImages(idImg) {
  //permet d'aller chercher le nom et l'emplacement des images qui remplacent les images actuelles.
  document.getElementById(idImg).src = 'assets/img/' + idImg + '_2.jpg';
}

//exercice 6 partie 2
// Ici nous allons chercher la deuxième image
function changeImage(img){
  document.getElementById(img).src ='assets/img/' + img + '_2.jpg';
}
// et ici nous allons récupérer la première image
function resetImage(img){
  document.getElementById(img).src ='assets/img/' + img + '.jpg';
}


// exercice 1 partie 3
// mon evenement: onmousseover
// J'appelle ma fonction "changeBorder"
function changeBorder() {
  // je veux mettre mon bord d'image à 3 px et en rouge du coup je mets la propriété : .style.border
document.getElementById('image16').style.border = '3px solid red';
}
// mon evenement: onmousseout
// J'appelle ma fonction "initialBorder"
function initialBorder() {
// avec ma propriété je réinitialise mon bord : initial
document.getElementById('image16').style.border = 'initial';
}

// exercice 2 partie 2 A revoir
// pour masquer la page au démarrage, du coup la propriété display est en dehors d'une fonction
document.getElementById('textOnClick').style.display = 'none';

// afficher ou masquer le texte en fonction de l'ancre.
// 1ere fonction pour afficher
// La propriété display définit le type d'affichage utilisée pour le rendu d'un élément
function display(){
document.getElementById('textOnClick').style.display = 'block';
}
// 2eme fonction pour Hide
function hide(){
// en mettant comme valeur 'none' à la propriété display l'élément ne s'affiche pas.
document.getElementById('textOnClick').style.display = 'none';
}


// exercice 3 partie 3
function changeColor(elemnt){
  // on stocke dans une variable la valeur de l'attribut "class" de l'élément sur lequel on vient de cliquer
var classValue = elemnt.getAttribute('class');
// on utilise la fonction "split" pour éclater la chaine de caractère contenu dans la variable "classValue"
// On stocke le résultat dans la variable "classArray" qui devient un tableau
// Attention tous les index de tableau commence à 0 !!  tableau[index]
var classArray = classValue.split(' ');
// on applique au texte la couleur correspondant au deuxième élément du tableau
document.getElementById('textColor').style.color = classArray[1];
}

//exercice 4 partie 4
//fonction pour valider que les mots de passes sont identiques.
function passewordmatch(){
  //On stocke tout l'élement dans la variable pour utiliser la value et le borderColor sans réutiliser document.getElementById.
    var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');
  //!= ça veut dire 'différent de'
  //si les deux sont différent à la validation on vert que les bordures soit rouge.
  if (password.value != confirmPassword.value) {
    confirmPassword.style.borderColor='red';
    password.style.borderColor='red';
    // ou alors si les deux sont égaux à la validation bordure green.
  }else{
    confirmPassword.style.borderColor='green';
    password.style.borderColor='green';
  }
}
