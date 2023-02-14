let tableTeamEl = document.getElementById('membri')
let cardEl = document.getElementById('nome-ruolo')


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membriTeam =[ {
    Nome: 'Wayne Barnett',
    Ruolo: 'Founder & CEO',
    Foto: 'wayne-barnett-founder-ceo.jpg'
},
{
    Nome: 'Angela Caroll',
    Ruolo: 'Chief Editor',
    Foto: 'angela-caroll-chief-editor.jpg'
},
{
    Nome: 'Walter Gordon',
    Ruolo: 'Office Manager',
    Foto: 'walter-gordon-office-manager.jpg'
},
{
    Nome: 'Angela Lopez',
    Ruolo: 'Social Media Manager',
    Foto: `<img src="./img/angela-caroll-chief-editor.jpg" class="card-img-top" alt="...">`
},
{
    Nome: 'Scott Estrada',
    Ruolo: 'Developer',
    Foto: 'scott-estrada-developer.jpg'
},
{
    Nome: 'Barbara Ramos',
    Ruolo: 'Graphic Designer',
    Foto: 'barbara-ramos-graphic-designer.jpg'
},
]

console.log(membriTeam)

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto (in questo fase usiamo il ciclo for…in )

for ( let chiave in membriTeam) {
    console.log(membriTeam[chiave].Nome)
    console.log(membriTeam[chiave].Ruolo)
    console.log(membriTeam[chiave].Foto)
    
    let nomeTeam = membriTeam[chiave].Nome
    let ruoloTeam = membriTeam[chiave].Ruolo
    let fotoTeam = membriTeam[chiave].Foto

    console.log('Il nome:'+' ' + nomeTeam +' ' + 'Ruolo del componente del team' +ruoloTeam+' ' + 'foto teserra' +' ' + fotoTeam)
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

 for ( let i = 0; i < membriTeam.length; i++){
    let correctMembri = membriTeam[i]

    let  nomeMembro = correctMembri.Nome
    let  ruoloMembro = correctMembri.Ruolo
    let  fotoMembro = correctMembri.Foto

    console.log(nomeMembro)
    console.log(ruoloMembro)
    console.log(fotoMembro)

    const table = 
    `<tr>
        <td>${nomeMembro}</td>
        <td>${ruoloMembro}</td>
        <td >.${fotoMembro}</td>
    </tr>`

    console.log(table)
    tableTeamEl.innerHTML += table

}

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
for (let i = 0; i < membriTeam.length; i++){
    const membriCard = membriTeam[i]
    
    let nomeCard = membriCard.Nome
    let ruoloCard = membriCard.Ruolo
    let fotoCard = membriCard.Foto


    const card = 
    `<div class="card col-4 p-0">
        <img src="${fotoCard}" class="card-img-top" alt="...">
        <div class="card-body">
            <h1>
                ${nomeCard}
            </h1>
            <p>
                ${ruoloCard}
            </p>
        </div>
    </div>`
    
    

    cardEl.innerHTML += card
}

// BONUS 2:
// Organizzare i singoli membri in card/schede (trovato un esempio allegato, ma siete liberi di gestire la grafica a vostro piacimento)
