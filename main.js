// # 1. 
// - Récupère la div dont l'id est #content
let divContent = document.querySelector("#content")

// - Ajoute un h2 dedans
let h2 = document.createElement("h2")
divContent.appendChild(h2)

// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 
h2.innerText = 'Part 6 - Exercice 1'

// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2
let p = document.createElement('p')
divContent.insertBefore(p, h2.nextSibling)
p.innerText = "lorem ispum"



// # 3.
// - Créer un h1 
let h1 = document.createElement('h1')
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
h1.innerText = 'Le DOM - Création de HTML'
// - Place le en premier enfant de la div #content
divContent.insertBefore(h1,h2)

// # 4.
// - Prend le contenu de la div #content
let content = divContent.innerHTML
// - Copie le dans la div #secondaire
let divSecondaire = document.querySelector("#secondaire")
divSecondaire.innerHTML = content
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire
let h2Secondaire = document.querySelectorAll('h2')[1]
h2Secondaire.innerText = 'Part 6 - Exercice 2'


// # 5.
// - Créer une nouvelle div #matiere
let divMatiere = document.createElement('div')
divMatiere.id = ('matiere')

divContent.parentElement.insertBefore(divMatiere, divSecondaire.nextSibling)
// - Créer une liste ordonnée des 3 dernières choses que tu as appris
let ol = document.createElement('ol')
divMatiere.appendChild(ol)
let ol_li = ["","",""] 
ol_li.forEach((e,i)=> {
    ol_li[i] = document.createElement('li')
    ol.appendChild(ol_li[i])
    switch (i) {
        case 0:
            ol_li[i].innerText = 'Une certaine matière'
            break;
        
        case 1:
            ol_li[i].innerText = 'algo à gogo'
            break;

        case 2:
            ol_li[i].innerText = 'ne te loop pas pcke moi je te looperais pas'
            break;
        default:
            break;
    }
});


