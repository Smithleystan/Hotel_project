function Prevision(nbNuit, dejeuner) {
    prix_total = nbNuit * prixJournalier
    console.log(dejeuner)
    if (dejeuner == "true") {
        prix_total = prix_total + prixDejeuner * nbNuit
    } else { prix_total }
    console.log(prix_total)

    alert(`le paiement à la fin du séjour sera de ${prix_total} €`)



}

function Welcome() {
    alert(`bienvenue à l'hotel Mr ou Mme ${clients[clients.length - 1].nom} ${clients[clients.length - 1].prenom}`)
}
