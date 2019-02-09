
// const startApp = document.getElementById('startApp');
// 	startApp.addEventListener('click'	, () => {
// 	location.replace('app.html');
// });

//APRENDIZAJE DE querySelector
//la siguiente forma de programar botones usa querySelector, como todavía no descubro la diferencia 
//entre esto y lo que usé para programar otros botones, la dejaré porque sé que me servirá 
//para aprender posteriormente...
const  encodeBttn = () => {
	let resultEncode = cipher.encode(parseInt(document.getElementById('keyEncrypt').value),document.getElementById('messageEncrypt').value.toUpperCase());
	document.getElementById('resultEncrypt').innerHTML = resultEncode; //envía el resultado al p element resulEncrypt
	const encryptScreen = document.querySelector('#encryptScreen');
	encryptScreen.style.display = 'none';
	const showOutput = document.querySelector('#outputScreen');
	showOutput.style.display = 'block';
	return resultEncode;
};
document.getElementById("encryptButton").addEventListener('click',encodeBttn);

const  decodeBttn = () => {
	let resultDecode = cipher.decode(parseInt(document.getElementById('keyDecrypt').value),document.getElementById('messageDecrypt').value.toUpperCase());
	document.getElementById('resultDecrypt').innerHTML = resultDecode; //envía el resultado al p element resulEncrypt
	const decryptScreen = document.querySelector('#decryptScreen');
	decryptScreen.style.display = 'none';
	const showOutput = document.querySelector('#outputScreen');
	showOutput.style.display = 'block';
	return resultDecode;
};
document.getElementById('decryptButton').addEventListener('click',decodeBttn);

const btnEncrypt = document.getElementById('chooseEncrypt'); 
btnEncrypt.addEventListener('click'	, () => {
	const chooseScreen = document.querySelector('#chooseScreen');
	chooseScreen.style.display = 'none';
	const showEncode = document.querySelector('#encryptScreen');
	showEncode.style.display = 'block';
	});

const btnDecrypt = document.getElementById('chooseDecrypt');
btnDecrypt.addEventListener('click'	, () => {
	const chooseScreen = document.querySelector('#chooseScreen');
	chooseScreen.style.display = 'none';
	const showDecode = document.querySelector('#decryptScreen');
	showDecode.style.display = 'block';
	});
// TERMINA APRENDIZAJE de querySelector

const btnAgain = document.getElementById('againButton');
btnAgain.addEventListener('click', ()=>{
	location.reload(true);
});

const reloadBttn = document.getElementById('quitButton');
	reloadBttn.addEventListener('click'	, () => {
	location.replace('index.html');
});