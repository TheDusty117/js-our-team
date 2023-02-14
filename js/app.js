//CREAZIONE ARRAY COMPOSTO DA OGETTI


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
  console.log(teamMembers[chiave])

}