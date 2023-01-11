const add = document.querySelector('i');
add.style.padding = '0 10px'
const inputModif = document.createElement('input');
// Dire de quel type est l'input
inputModif.setAttribute("type", "text")
const liste = document.getElementsByClassName('taches')[0];
const saisie = document.getElementById('saisie');

// EVENEMENT AU CLIQUE SUR LE BOUTON AJOUTER
add.addEventListener('click', ajout)

function ajout() {
   
    const newTask = document.createElement('li');
    const newp = document.createElement('p');
    const newDiv = document.createElement('div');

    if (saisie.value == "") {
        alert('Le champs est vide')
        return
    } 
 
    liste.style.display = 'contents';
    liste.style.listStyleType = 'none';

    newTask.style.backgroundColor = 'lightblue';
    newTask.style.display = 'flex';
    newTask.style.justifyContent = 'space-between';
    newTask.style.margin = '5px 0';
    newTask.style.padding = '5px 5px'
    newDiv.innerHTML = '<i class="fa-solid fa-square-check"></i><i class="fa-solid fa-pencil"></i><i class="fa-sharp fa-solid fa-trash"></i>';
    


    // SELECTION ET CACHE DE L'ICONE VALIDER
    const check = newDiv.querySelectorAll('i')[0];
    console.log(check);
    check.style.display = 'none';
    check.style.padding = '3px 5px'

    // SELCTION DU CRAYON POUR MODIFIER
    const modif = newDiv.querySelectorAll('i')[1];
    console.log(modif);
    modif.style.padding = '3px 5px'

    // SELCTION DE L'ICONE POUBELLE 
    const del = newDiv.querySelectorAll('i')[2];
    console.log(del);
    del.style.padding = '3px 5px'

    liste.appendChild(newTask);
    newTask.append(newp, newDiv);
    newp.textContent = saisie.value;
    saisie.value = "";

    
// EVENEMENT SUR L'ICONE MODIFIER (CRAYON)
modif.addEventListener('click', change)

function change() {

    check.style.display = 'contents';
    modif.style.display = 'none';

    inputModif.style.backgroundColor = 'green';
    inputModif.style.width = '80%';
    inputModif.value = newp.textContent;

// Remplacer le paragraphe par l'input une fois le crayon cliqué replaceChild(élément à ajouté, élément à remplacé)
    newTask.replaceChild(inputModif,newp);
    
    
}


// EVENEMENT SUR LE BOUTON VALIDER APRES CHANGEMENT
check.addEventListener('click', validation)

function validation() {
    check.style.display = 'none';
    modif.style.display = 'contents';

    if (inputModif.value == "") {
        check.style.display = 'contents';
        modif.style.display = 'none';
        alert('Le champs est vide')
        return
    }

    newTask.replaceChild(newp, inputModif)

    newp.textContent = inputModif.value;

    
}



// EVENEMENT POUR SUPPRIMER
del.addEventListener('click', supprime)

function supprime() {

    newTask.style.display = 'none';
}

}



