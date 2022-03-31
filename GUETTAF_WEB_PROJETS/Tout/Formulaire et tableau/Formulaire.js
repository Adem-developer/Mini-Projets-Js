const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const password = document.getElementById('password');
const verif = document.getElementById('verif');

form.addEventListener('submit', e =>
{
	e.preventDefault();
	
	checkInputs();
});

function checkInputs()
{
	const usernameValue = username.value.trim();
	const ageValue = age.value.trim();
	const passwordValue = password.value.trim();
	const verifValue = verif.value.trim();
	
	if(usernameValue === '')
    {
		setErrorFor(username, 'Le Pseudo ne peut pas être vide.');
        
	}
    else if (usernameValue > 20)
    {
        setErrorFor(username, 'Votre pseudo ne peut dépasser 20 caractères.');
       
    }
    else
    {
		setSuccessFor(username);
	}
	
	if(ageValue != '')
    { 
        setSuccessFor(age);
	}

	if(passwordValue === '')
    {
		setErrorFor(password, 'Le Mot de passe ne peut pas être vide.');
        
	}
    else
    {
		setSuccessFor(password);
	}
	
	if(verifValue === '')
    {
		setErrorFor(verif, 'La vérification ne peut pas être vide.');
        
	}
    else if(passwordValue !== verifValue)
    {
		setErrorFor(verif, 'Mots de passe non identiques.');
        
	}
    else
    {
		setSuccessFor(verif);
	}
}

function setErrorFor(input, message)
{
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input)
{
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function time(){ 
    let x = new Date();
    let date = "Le " + x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
    let heure = "à " + x.getHours() + ":" + x.getMinutes();

    return `${heure} ${date}`;
}

let id=0;
function idcount()
{
    id++;
}

function allcheck()
{
    const pseudo = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const mot_de_passe = document.getElementById('password').value;
    const date =  time();
    var hash = CryptoJS.MD5(mot_de_passe);

    
    const div = document.getElementById('Tableau');
    const td = document.createElement('td');
    const tr = document.createElement('tr');
    const table = document.createElement('table');
    const button = document.createElement('button');

    div.appendChild(table);
    table.appendChild(td);
    table.appendChild(tr);
    tr.appendChild(td);
        
    tr.innerHTML=td.innerHTML= `Id : ${id} | Pseudo : ${pseudo} | âge : ${age} | Heure et date d'envoi : ${date} | Hash du mot de passe : ${hash} `;
}