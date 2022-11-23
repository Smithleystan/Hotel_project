
let getHour = 16
let minArrivee = 15
let i = 0
let prix_total = 0
let majoration = 10
let prixDejeuner = 7
let j = 0
let prixJournalier = 65

let clients = []

function Client(nom, prenom, nuit, dejeuner) {
    this.nom = nom
    this.prenom = prenom
    this.nuit = nuit
    this.dejeuner = dejeuner
}


clients.push(new Client("Garcia", "jose", 8, true))
clients.push(new Client("De Caunes", "Antoine", 2, true))



function Action(numero, action) {
    this.numero = numero
    this.action = action
}

let listeAction = []
listeAction.push(new Action("1", "arrivee"))
listeAction.push(new Action("2", "depart"))
listeAction.push(new Action("3", "fermeture"))


//function

let myFunction = {
    prevision: function Prevision(nbNuit, dejeuner) {
        prix_total = nbNuit * prixJournalier
        console.log(dejeuner)
        if (dejeuner == "true") {
            prix_total = prix_total + prixDejeuner * nbNuit
        } else { prix_total }
        console.log(prix_total)

        alert(`le paiement à la fin du séjour sera de ${prix_total} €`)


    },



    welcome: function Welcome() {
        alert(`bienvenue à l'hotel Mr ou Mme ${clients[clients.length - 1].nom} ${clients[clients.length - 1].prenom}`)
    }

}

let answer = window.prompt('1 arrivee ou 2 depart')
let tab = listeAction.find(action => action.numero === answer)
let { numero } = tab
if (numero == 1) {
    if (getHour >= minArrivee) {
        let inputNom = window.prompt('saisissez votre nom')

        let inputPrenom = window.prompt('saisissez votre prénom')

        let inputNuit = window.prompt('Saisissez le nombre de nuit')

        let inputDejeuner = window.prompt('voulez vous déjeuner  ?')

        inputDejeuner === "oui" ? inputDejeuner = "true" : inputDejeuner = "false"
        


        myFunction.prevision(Number(inputNuit), inputDejeuner)

        let answer = window.prompt('confirmer votre séjour')
        answer

        if (answer == "oui") {
            myFunction.welcome()
            clients.push(new Client(inputNom, inputPrenom, inputNuit, inputDejeuner))
            console.log(clients) 

        } else if (answer == "non") {
            console.log('annulation')
           



        }
    } else {
        alert('Vous etes arrivé trop tôt. Revenez à partir de 15h ')
    }
} else if (numero == 2) {
    let nomSortie = window.prompt('Quel est votre nom')
    let prenomSortie = window.prompt('Quel est votre prénom')
    let tab = clients.find(client => nomSortie == client.nom && prenomSortie == client.prenom)

    let { nom, prenom, nuit, dejeuner } = tab

    prix_total = prixJournalier * nuit
    if (getHour > 11) {
        prix_total = prix_total + majoration

    } else (prix_total)
    if (dejeuner = "true") {
        prix_total + prixDejeuner * nuit
    } else { prix_total }

    alert(`le montant à payer est de ${prix_total} € `)
    let newTab = clients.filter(client => client.nom == nom && client.prenom == prenom)
    clients = newTab


}