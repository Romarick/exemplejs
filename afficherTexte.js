
$('#listeVideo').on('click', 'a', modifierTexte);

function modifierTexte() {   
    /*Récuperer text sur l'élément cliquez */
    
    var recupText = $(this).attr("num-episode");
    
    alert(recupText);
    
    $("#num_episode").text(recupText);
    
}


