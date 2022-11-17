const readline = require('readline')
const {stdin:input, stdout: output} = require('process')
const rl = readline.createInterface(input, output)

//https://askcodez.com/comment-faire-pour-automatiser-le-commit-et-push-git.html


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


//function

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

do{
    

    rl.question('arrivee ou depart  \n', answer =>{
        while(answer != listeAction[i].action){
                i++
        }
        if(listeAction[i].action == listeAction[0].action){
            if(getHour>= minArrivee){
                rl.question("saisissez votre nom : \n", inputNom=>{
                    newClient = new Client (`${inputNom}`)
                    rl.question("saisissez votre prénom  : \n", inputPrenom=>{
                        newClient.prenom = inputPrenom
                        rl.question("saisissez le nombre de nuit : \n", inputNuit=>{
                            newClient.nuit = inputNuit
                            rl.question("voulez vous déjeuner : \n", inputDejeuner=>{
                                inputDejeuner
                                inputDejeuner == "oui" ?  newClient.dejeuner = "true": newClient.dejeuner = "false"
                                clients.push(newClient)
                                
                                myFunction.prevision()
                                
                             
                                rl.question('confirmer votre séjour ? \n', answer=>{
                                    answer
                                    if(answer == "oui"){
                                        myFunction.welcome()
                                        rl.close()

                                    }else if(answer == "non"){
                                        console.log('annulation')
                                        clients.pop()
                                       
                                        
                                        rl.close()
                                    }
                                })

                            })
                
                        })
                    
                    })
                
                })

        
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




