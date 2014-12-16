
$('#listeVideo').on('click', 'a', modifierTexte);

function modifierTexte() {
    
    /*Récuperer text sur l'élément cliquer */
    
    var recupText = $(this).text();
    
    $("#num_episode").text(recupText);
    
}


