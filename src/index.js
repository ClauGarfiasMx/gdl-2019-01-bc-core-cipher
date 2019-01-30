
const  encodeBttn = () => {
	cipher.encode(parseInt(document.getElementById('keyEncrypt').value),document.getElementById('messageEncrypt').value);
	//document.getElementById('resultEncrypt').innerHTML = output; //envía el resultado al p element resulEncrypt
}


const  decodeBttn = () => {
	cipher.decode(parseInt(document.getElementById('keyDecrypt').value),document.getElementById('messageDecrypt').value);
	//document.getElementById('resultEncrypt').innerHTML = output; //envía el resultado al p element resulEncrypt
}

const btnEncrypt = document.getElementById('chooseEncrypt');

btnEncrypt.addEventListener('click'	, () => {
	const chooseScreen = document.querySelector('#chooseScreen');
	chooseScreen.style.display = 'none';
	});
