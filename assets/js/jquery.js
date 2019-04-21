// exercice 1 partie 1 Jquery
// Cacher la div text.
// Cacher la div text.
$(document).ready(function() {
  $('#ExoOneJquery').hide();
});

// exercice 2 partie 1 Jquery
// Afficher la div text.
$(function() {
  $( '#ExoTwoJquery' ).show();
});

// exercice 3 partie 1 Jquery
// Changer le font-family de la div text en "Arial".
$(function() {
  $('#ExoThreeJquery').css('font-family', 'arial');
  // on applique la valeur arial à la propriété font-family
});

// exercice 4 partie 1 Jquery
// Changer la couleur de toutes les balises li en rouge.
$(function() {
  $('.exoFourJquery').css('color', 'red');
});

// exercice 5 partie 1 Jquery
// Vider la div secondText.
$(function() {
  $('#secondTextExoFiveJquery').empty();
});

// exercice 6 partie 1 jquery
// Cacher tous les éléments de la classe hide.
$(function() {
  $('.ExoSixJquery').hide();
});

// exercice 7 partie 1 jquery
// Supprimer tous les éléments de la classe remove.
$(function() {
  $('.ExoSevenJquery').remove();
});

// exercice 8 partie 1 jquery
// Donner à tous les éléments li enfants de ol la couleur rouge.
// $(function() {
// $('ol').children('li').css('color', 'red');
// });

// exercice 9 partie 1 jquery
$(function() {
  $('#firstTextExoNineJquery, #thirdTextExoNineJquery').css('border', '5px green dashed');
});

// exercice 10 partie 1 jquery
// Du JQuery est déjà présent et permet de cacher tous les éléments de la classe hide. Ajouter cette classe à la div thirdText.
$(function() {
  $('#thirdTextExoTenJquery').addClass('hideExoTenJquery');
  $('.hideExoTenJquery').hide();
  });

// exercice 1 partie 2 jquery
// Au clic sur le bouton, afficher une boite de dialogue avec le message de votre choix.
  $( '#clickMe' ).click(function() {
    alert('Hello world');
  });

//exercice 2 partie 2
  // Au double clic, modifier la largeur de l'image à 500px.
  $(document).ready(function(){
    $('#image17').dblclick(function() {
      $(this).width('500px');
    });
  });

//exercice 3 partie 3
// Afficher ou masquer la div text au clic des liens fournis.
$(function(){
  $('#showExoThreeJquery').click(function(){
    $('#textExoThreeJquery').show();
  });
  $('#hideExoThreeJquery').click(function(){
    $('#textExoThreeJquery').hide();
  });
});

  //exercice 4 partie 2
  $(function(){
    //Quand on clique sur une div de couleurs.
    $('.color').click(function(){
    //On stock dans la variable l'id.
    var colors = $(this).attr('id');
    //On modifie la couleur du texte en récupérant la couleur stocké dans la variable.
    $('#textExoFourJquery').css('color', colors);
    });
  });

  //exercice 5 partie 2
  // Quand un champ a le focus, définir sa bordure à "1px solid green". Quand le champ perd le focus, définir la bordure à "1px solid red"
  $(function(){
     $('input').focusin(function(){
       $('#lastNameExoFive').text($(this).css('border', '1px solid green'));
     });
     $('input').focusout(function(){
       $('#firstNameExoFive').text($(this).css('border', '1px solid red'));
     });
  });

//exercice 6 partie 2
  // Au passage de la souris sur un bouton de couleur, colorer le texte.
  // Le texte doit redevenir noir quand la souris quitte le bouton.$( '#clickMe' ).click(function() {
  $(function() {
    $('div.color').mouseover(function() {
      var changeColor = $(this).css('background-color');
      $('#textExoSixJquery').css('color', changeColor);
    });

    $('div.color').mouseout(function() {
      $('#textExoSixJquery').css('color', 'initial');
  });
  });

// exercice 1 partie 3
  $(function(){ // you can wrap it here with in document ready block
     var count = 0;
     $('#buttonExo13').click(function(){
      count++; //ajoute 1 au compteur
        $('#textExo13').val(count);//fonction val permet de définir la valeur d'un input (pas forcement que des nombres)
     });
  });

//exercice 2 partie 3
  $(function(){
    var count = 0;
    $('#buttonUp').click(function(){ //clique sur le bouton +
      count++; //ajoute 1 au compteur
      $('#number').val(count);
    });
    $('#buttonDown').click(function(){ //clique sur le bouton -
      count--; // retire 1 au compteur
      $('#number').val(count);
    });
  });

//exercice 3 partie 3
$(function(){
  // Permet de générer un nombre aléatoire entre 0 et 100.
  var getNumber = Math.floor(Math.random()*101);
  var count = 0 ;
  $('#button').click(function(){
    // Déclare la variable dans laquelle on stocke la saisie utilisateur.
    var result = $('#result').val();
    // On incrémente le nombre de coups.
    count++;
    // Si la saisie utilisateur est inférieure au nombre généré, je le précise à l'utilisateur avec une boîte de dialogue.
    if (result < getNumber){
      alert('pas assez !');
      // Si la saisie utilisateur est supérieure au nombre généré, je le précise à l'utilisateur avec une boîte de dialogue.
    } else if (result > getNumber){
      alert('trop !');
      // Si la saisie utilisateur est égale au nombre généré, je le précise à l'utilisateur avec une boîte de dialogue.
    } else if(result == getNumber){
      alert('c\'est bon ! Nombre de coups: ' + count);
      // Dans tout les autres cas on demande un nombre.
    } else{
      alert('Veuillez entrer un nombre !');
    }
  });
});

//exercice 4 partie 3
$(function(){
//on va stoké dans la variable firstColor la couleur de base du rectangle.
//$('.rectangle').css('background-color') récupére la valeur de la propriété background-color parce qu'on n'a pas précisé de valeur.
  var firstColor = $('.rectangle').css('background-color');
 $('#changeHeight').click(function(){
//on stock la hauteur de réctangle dans la variable "rectangleHeight".
//$('.rectangle').height(); récupére la hauteur du réctangle parce qu'on n'a pas précisé de valeur.
 	var rectangleHeight = $('.rectangle').height();
//selon la hauteur qu'on récupere a chaque click, on y ajoute 10 ou on la remet a 10.
 	if (rectangleHeight < 100 ){
 		rectangleHeight += 10;
 	}else{
 		rectangleHeight = 10;
 	}
//on attribue cette nouvelle hauteur au rectangle.
 $('.rectangle').height(rectangleHeight);
 });
 $('#changeColor').click(function(){
//On attribue a notre réctangle la couleur verte.
 	$('.rectangle').css('background-color','green');
 });
 $('#resetColor').click(function(){
//On attribue a notre réctangle la couleur que l'on a stocké au chargement de la page.
 	$('.rectangle').css('background-color', firstColor);
 });
 $('#hideRectangle').click(function(){
//on cache notre réctangle avec la fonction hide
 	$('.rectangle').hide();
 });
 $('#showRectangle').click(function(){
//on affiche notre réctangle avec la fonction show
 	$('.rectangle').show();
 });
});


//exercice 5 partie 3
$(function(){
  //On stocke la largeur et la hauteur de la fenêtre dans des variables
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  //On stocke la largeur et la hauteur du carré dans des variables
  var squareWidth = $('#square').width();
  var squareHeight = $('#square').height();
  //Je met un évènement"keydown" sur mon Input.
  //Je met "event" en paramètre de ma fonction anonyme, grâce à ça je vais pouvoir récupérer la touche sur laquelle j'ai appuyé.
  $('#direction').keydown(function(event){
    var squarePositionLeft = $('#square').offset().left;
    var squarePositionTop = $('#square').offset().top;
    //Switch est utilisé lorsque l'on veut comparer une variable à plusieurs valeurs
    switch (event.keyCode) {
      case 37:
        squarePositionLeft -= 10;
      break;
      case 38:
        squarePositionTop -= 10;
      break;
      case 39:
        squarePositionLeft += 10;
      break;
      case 40:
        squarePositionTop += 10;
      break;
    }
  // si mon carré dépasse 0 (donc à gauche ma fenêtre)
    if(squarePositionLeft < 0){
      // alors mon carré va au bout de ma fenêtre de l'autre côté!
      squarePositionLeft = windowWidth - squareWidth;
// Si la position haute de mon carré est inférieur de 0
    }else if(squarePositionTop < 0){
      // alors la position haute de mon carré est égale à la hauteur de ma fenêtre moins la hauteur du carré
      squarePositionTop = windowHeight - squareHeight;
      //
    }else if((squarePositionTop + squareHeight) > windowHeight){
      squarePositionTop = 0;
    }else if((squarePositionLeft + squareWidth) > windowWidth){
      squarePositionLeft = 0;
    }
  //On définit la position du carré grâce à la fonction "Offset".
  $('#square').offset({top : squarePositionTop, left : squarePositionLeft});
  });
});

//exercice 1 partie 4
$(document).ready(function() {
  var victory = 0;
  var defeat = 0;
  var even = 0;
  // Je lance ma fonction quand je click sur le bouton
  $('#shiFuMi').click(function(){
    // Je stock dans une variable un tableau(Array)
    var choices = ['Feuille','Ciseaux','Pierre'];
    //Je génère le choix de l'ordinateur
    var computerChoice = Math.floor(Math.random()*3);
    // Choix de l'utilisateur
    var userChoice = $('#userChoice option:selected').val();
    //Si le choix de l'ordinateur et le même choix que celui de l'utilisateur alors :
    if(computerChoice == userChoice){
    //une boite d'alerte ce gènere (Egalité).
      alert('égalité');
      even++;
    // Autrement si l'utilisateur gagner contre l'ordinateur exemple(Pierre > Ciseaux) alors :
    }else if ((choices[userChoice] == 'Pierre' && choices[computerChoice] == 'Ciseaux') || (choices[userChoice] == 'Ciseaux' && choices[computerChoice] == 'Feuille') || (choices[userChoice] == 'Feuille' && choices[computerChoice] == 'Pierre')) {
    // L'utilisateur gagne.
      alert('Youpi, tu as gagné');
      victory++;
    //Sinon :
    }else{
    // L'ordinateur Gagne
      alert('tu as perdu');
      defeat++;
    }
    var victoryPercentage = (victory/(victory + defeat + even))*100;
    $('#resultShiFuMi').html('<p class="resultVictory">Nombre de victoire : ' + victory + '(' + victoryPercentage +  '%)</p><p class="resultDefeat">Nombre de défaite : ' + defeat + '</p>');
  });
});

//exercice 2 partie 4
$(function(){
$('#submitNote').click(function(){
  //On stocke la regex pour faire une note 10 ou 10;75 ...
  var noteRegex = new RegExp (/^([0-9]{1,2})([\.,]{1}[0-9]{1,2}){0,1}$/);
  //On stocke dans des variables la valeur récupérée des input. Grâce à number, on met les strings en nombres.
  var firstNote = $('#firstNote').val();
  var secondNote = $('#secondNote').val();
  var thirdNote = $('#thirdNote').val();
  var fourthNote = $('#fourthNote').val();
  var fifthNote = $('#fifthNote').val();

  if(firstNote.match(noteRegex) && secondNote.match(noteRegex) && thirdNote.match(noteRegex) && fourthNote.match(noteRegex) && fifthNote.match(noteRegex)){
    //On fait la moyenne par rapport aux 5 notes.
    var average = (parseFloat(firstNote) + parseFloat(secondNote) + parseFloat(thirdNote) + parseFloat(fourthNote) + parseFloat(fifthNote)) / 5;
    if(average >= 0 && average < 10){
      alert('Moyenne : ' + average + '\nAppréciations : \nEn dessous de la moyenne.');
    }else if (average >= 10 && average < 13){
      alert('Moyenne : ' + average + '\nAppréciations : \nMoyen.');
    }else if (average >= 13 && average < 16){
      alert('Moyenne : ' + average + '\nAppréciations : \nBien.');
    }else if (average >= 16 && average < 20){
      alert('Moyenne : ' + average + '\nAppréciations : \nTrès bien.');
    }else{
      alert('Excellent !');
    }
  }else{
    alert('Veuillez entrer des notes valides svp.');
  }
});
});

// exercice 3 partie 4
$(function(){
  $('#submitInfo').click(function(){
    var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
    var regexphone = /^0[1-9]{1}[0-9]{8}$/;
    var regexMail = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,}$/;

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var mail = $('#mail').val();
    var phoneNumber = $('#phoneNumber').val();

    if (lastName.match(regexName) && firstName.match(regexName) && mail.match(regexMail) && phoneNumber.match(regexphone)){
      $('#displayInfo').html('Firstname : ' + firstName + '<br>Lastname : ' + lastName + '<br>Mail : ' + mail + '<br>Phone number : ' + phoneNumber);
    } else{
      alert('Veuillez entrer des données valides');
    }
  });
});

// exercice 4 partie 4
$(function(){
    $('#lastNameExoFour').focusout(function(){
      var inputLastName = $('#lastNameExoFour').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(inputLastName)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#firstNameExoFour').focusout(function(){
      var input = $('#firstNameExoFour').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#birthExoFour').focusout(function(){
      var input = $('#birthExoFour').val();
      var regex = new RegExp();
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#placeOfBirthExoFour').focusout(function(){
      var input = $('#placeOfBirthExoFour').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#employExoFour').focusout(function(){
      var input = $('#employExoFour').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#societyExoFour').focusout(function(){
      var input = $('#societyExoFour').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#validate').click(function(){
      // Si les données saisies sont : "Jérôme OTT, 5/06/1990, Margny-lès-Compiègne, Formateur, Novei", la phrase de présentation sera : "Jérôme OTT, né le 5/06/1990 à Margny-lès-Compiègne, actuellement Formateur à Novei
      alert(($('#firstNameExoFour').val())+ ' ' + ($('#lastNameExoFour').val()) + ', ' + 'né(e) le ' + ($('#birthExoFour').val()) + ' à ' + ($('#placeOfBirthExoFour').val()) + ', actuellement ' + ($('#employExoFour').val()) + ' à '+ ($('#societyExoFour').val()));
    });
});

// Exercice 1 PArtie 4 AngularJs
    var clicks = 0;
    $('#AngularE1P4ButtonPlus').click(function(){
      clicks++;
      $('#clicksAE1P1').text('Score ' +clicks);
    });
    $('#AngularE1P4ButtonLess').click(function(){
      clicks--;
      $('#clicksAE1P1').text('Score ' +clicks);
    });
