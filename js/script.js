// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

const userFirstName = prompt('First Name?');
const userLastName = prompt('Last name?');
const userPreferColor = prompt('Prefer color?');
const userPreferNumber = prompt('Prefer number?');

output = `
    <strong>La tua password è:</strong><br>
    ${userFirstName}${userLastName}${userPreferColor}${userPreferNumber}.
`;

document.getElementById('password').innerHTML += output;