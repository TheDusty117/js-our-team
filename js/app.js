//CREAZIONE ARRAY COMPOSTO DA OGETTI
//creo array teamMembers array, che avra' a sua volta 6 ogetti interni con le varie specifiche

const teamMembers = [
  
  {
    firstName: 'Wayne',
    lastName: 'Barnett',
    role: 'Founder & CEO',
    profileImg: './img/wayne-barnett-founder-ceo.jpg',
  },
  {
    firstName: 'Angela',
    lastName: 'Caroll',
    role: 'Chief Editor',
    profileImg: './img/angela-caroll-chief-editor.jpg',
  },
  {
    firstName: 'Walter',
    lastName: 'Gordon',
    role: 'Office Manager',
    profileImg: './img/walter-gordon-office-manager.jpg',
  },
  {
    firstName: 'Angela',
    lastName: 'Lopez',
    role: 'Social Media Manager',
    profileImg: './img/angela-lopez-social-media-manager.jpg',
  },
  {
    firstName: 'Scott',
    lastName: 'Estrada',
    role: 'Developer',
    profileImg: 'scott-estrada-developer.jpg',
  },
  {
    firstName: 'Barbara',
    lastName: 'Ramos',
    role: 'Graphic Designer',
    profileImg: './img/barbara-ramos-graphic-designer.jpg',
  },

]

// CICLARE CON (FOR ... IN) ARRAY DI OGETTI E STAMPARE IN CONSOLE = NOME, COGNOME, RUOLO E STRINGA FOTO

for(let chiave in teamMembers) {
  console.log(teamMembers[chiave])  //stampo in console le stringhe da cui e' composto il singolo membro

}

//STAMPA NEL DOM SOTTO FORMA DI STRINGA TUTTO

//ciclare per la lunghezza dell'array di teamMembers, la creazione della corrispettiva variabile per specifica del membro
//quindi ciclo for Classico che crea varie const con l'info interna, quindi const firstname=currentmember.firstname nomino variabile firstname uguale a membrocorrente punto firstname.

const membersTableEl = document.getElementById('team-members-table')
console.log(membersTableEl)

for (let i = 0; i < teamMembers.length; i++) {

  const currentMember = teamMembers[i] //prendo ogni membro dell'array con le sue info interne per 6 volte ciclate
  console.log(currentMember)

  const firstName = currentMember.firstName //creo variabile, che equivale al membro corrente. suachiave interna
  const lastName = currentMember.lastName
  const role = currentMember.role
  const profileImg = currentMember.profileImg
  console.log(firstName, lastName, role, profileImg)


  const tr = `
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${role}</td>
    <td><img src=${profileImg} alt=""></td>
  </tr>
  `
  membersTableEl.innerHTML += tr
  
}




//CREO VARIABILE PER PRENDERE LA TABLE BODY NEL DOM

// const membersTableEl = document.getElementById('team-members-table')
// console.log(membersTableEl)

//CREARE CICLO FOR CHE PER OGNI ITERAZIONE CREI UN ELEMENTO DEL DOM CHE CONTENGA LE SPECIFICHE DEL MEMBRO DEL TEAM

// for (let i = 0; i < teamMembers.length; i++){

//   const currentMember = teamMembers[i]
//   console.log(currentMember)

//   const firstName = currentMember.firstName //creo variabile, che equivale al membro corrente. suachiave interna
//   const lastName = currentMember.lastName
//   const role = currentMember.role
//   const profileImg = currentMember.profileImg
//   cons

// }

