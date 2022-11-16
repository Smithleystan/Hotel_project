const readline = require('readline')
const {stdin:input, stdout: output} = require('process')
const rl = readline.createInterface(input, output)
let nouveauClient = require ('./function')



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

let newClient


clients.push( new Client ("Garcia", "jose", 8, true))
clients.push( new Client ("De Caunes", "Antoine", 2, true))



function Action(action){
    this.action = action
}

let listeAction = []
listeAction.push(new Action ("arrivee"))
listeAction.push(new Action ("depart"))
listeAction.push(new Action ("fermeture"))





do{

    rl.question('arrivee ou depart  \n', answer =>{
        while(answer != listeAction[i].action){
                i++
        }
        if(listeAction[i].action == listeAction[0].action){
            if(getHour>= minArrivee){
                nouveauClient()
              
              
                    
               
               
            
        
            }else{
                console.log('Vous etes arrivé trop tôt. revenez à partir de 15h')
            }
        }else if(listeAction[i].action == listeAction[1].action){
            rl.question('Quel est votre nom  :  \n', nomSortie =>{
                nomSortie
                rl.question('Quel est votre prenom  :  \n', prenomSortie=>{
                    prenomSortie
                    while(clients[j].nom != nomSortie && clients[j].prenom != prenomSortie){
                        j++
                    }
                    prix_total = prixJournalier * clients[j].nuit
                    if (getHour>11){
                        prix_total = prix_total + majoration
        
                    }else(prix_total)
                    if(clients[j].dejeuner = "true"){
                        prix_total+prixDejeuner * clients[j].nuit
                    }else {prix_total}
                    
                    
                    console.log(`le montant total a payer est de ${prix_total} €`)
                    delete clients[j]
                    

                })
                
            })
            
          
        }
    
    })

}while(listeAction[i].action == listeAction[2].action)




