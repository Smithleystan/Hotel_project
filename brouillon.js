const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface(input, output)

let getHour = 16
let minArrivee = 15
let i = 0
let prix_total = 0
let majoration = 10
let prixDejeuner = 7
let j =0
let prixJournalier = 65

let clients = []

function Client(nom, prenom, nuit, dejeuner){
    this.nom = nom
    this.prenom = prenom
    this.nuit = nuit
    this.dejeuner = dejeuner
}

let newClien
clients.push( new Client ("Garcia", "jose", 8, true))
clients.push( new Client ("De Caunes", "Antoine", 2, true))



function Action(numero, action){
    this.numero = numero
    this.action = action
}

let listeAction = []
listeAction.push(new Action ("1","arrivee"))
listeAction.push(new Action ("2","depart"))
listeAction.push(new Action ("3","fermeture"))

///function 


let myFunction = {
    prevision : function Prevision(){
        prix_total = clients[clients.length-1].nuit * prixJournalier
        if(clients[i].dejeuner = "true"){
            prix_total+prixDejeuner * clients[i].nuit
        }else {prix_total}
      
        console.log(`le paiement à la fin du séjour sera de ${prix_total} €`)
        
    
    },
    
 

    welcome : function Welcome (){
        console.log(`bienvenue à l'hotel Mr ou Mme ${clients[clients.length-1].nom} ${clients[clients.length-1].prenom}`)
    } 

}
//fin des fonction 

rl.question('choix :   ',answer=>{
    let tab = listeAction.find(action=> action.numero === answer)
    let {numero}=tab
    if (numero ==1){
        if (getHour >= minArrivee) {
            rl.question("saisissez votre nom : \n", inputNom => {
                newClient = new Client(`${inputNom}`)
                rl.question("saisissez votre prénom  : \n", inputPrenom => {
                    newClient.prenom = inputPrenom
                    rl.question("saisissez le nombre de nuit : \n", inputNuit => {
                        newClient.nuit = inputNuit
                        rl.question("voulez vous déjeuner : \n", inputDejeuner => {
                            inputDejeuner
                            inputDejeuner == "oui" ? newClient.dejeuner = "true" : newClient.dejeuner = "false"
                            clients.push(newClient)

                            myFunction.prevision()


                            rl.question('confirmer votre séjour ? \n', answer => {
                                answer
                                if (answer == "oui") {
                                    myFunction.welcome()
                                    rl.close()

                                } else if (answer == "non") {
                                    console.log('annulation')
                                    clients.pop()


                                    rl.close()
                                }
                            })

                        })

                    })

                })

            })

    }
}
})

