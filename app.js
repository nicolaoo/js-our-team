let nomeEl = document.querySelector('.nome')
let ruoloEl = document.querySelector('.ruolo')
let fotoEl = document.querySelector('.foto')



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
    Foto: 'angela-lopez-social-media-manager.jpg'
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

// for ( let i = 0; i < membriTeam.length; i++){
//     let correctMembri = membriTeam[i]

//     console.log(correctMembri)
// }

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede (trovato un esempio allegato, ma siete liberi di gestire la grafica a vostro piacimento)
