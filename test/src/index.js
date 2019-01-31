
const  encodeBttn = () => {
	let resultEncode = cipher.encode(parseInt(document.getElementById('keyEncrypt').value),document.getElementById('messageEncrypt').value);
	document.getElementById('resultEncrypt').innerHTML = resultEncode; //envía el resultado al p element resulEncrypt
	const encryptScreen = document.querySelector('#encryptScreen');
	encryptScreen.style.display = 'none';
	const showOutput = document.querySelector('#outputScreen');
	showOutput.style.display = 'block';
	return resultEncode;


};
document.getElementById("encryptButton").addEventListener('click',encodeBttn);

const  decodeBttn = () => {
	let resultDecode = cipher.decode(parseInt(document.getElementById('keyDecrypt').value),document.getElementById('messageDecrypt').value);
	document.getElementById('resultDecrypt').innerHTML = resultDecode; //envía el resultado al p element resulEncrypt
	const decryptScreen = document.querySelector('#decryptScreen');
	decryptScreen.style.display = 'none';
	const showOutput = document.querySelector('#outputScreen');
	showOutput.style.display = 'block';
	return resultDecode;
};
document.getElementById('decryptButton').addEventListener('click',decodeBttn);

const startApp = document.getElementById('startApp');
startApp.addEventListener('click'	, () => {
	const explanationScreen = document.querySelector('#explanationScreen');
	explanationScreen.style.display = 'none';
	const showChoose = document.querySelector('#chooseScreen');
	showChoose.style.display = 'block';
	});

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

const btnAgain = document.getElementById('againButton');
btnAgain.addEventListener('click', ()=>{
	location.reload(true);
});

// const btnQuit = document.getElementById('quitButton');
// btnAgain.addEventListener('click', ()=>{
// 	location.replace('index.html').reload(true);
// });
