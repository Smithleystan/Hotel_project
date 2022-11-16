// liste des functions

function nouveauClient(){

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
    
                    
                
                Prevision()
                Welcome()
    
               
    
                
    
                })
    
            })
        
        })
    
    })
    
    
    }
    
    
    function Prevision(){
        prix_total = clients[clients.length-1].nuit * prixJournalier
        console.log(prix_total)
        if(clients[i].dejeuner = "true"){
            prix_total+prixDejeuner * clients[i].nuit
        }else {prix_total}
      
        console.log(`le paiement à la fin du séjour sera de ${prix_total} €`)
    
    }
    

    
function Welcome (){
    console.log(`bienvenue à l'hotel Mr ou Mme ${clients[clients.length-1].nom} ${clients[clients.length-1].prenom}`)
}


export default nouveauClient();