
const btnEncrypt = document.getElementById('chooseEncrypt');

btnEncrypt.addEventListener('click'	, () => {
	const chooseScreen = document.querySelector('#chooseScreen');
	chooseScreen.style.display = 'none';
	});

// //COMIENZA FUNCIÓN ENCODE!!!
let stringToCipher = document.getElementById('messageEncrypt').value; //string que introduce el usuario para cifrar
let stringCiphered = []; //array donde se almacenará el texto cifrado con el método push
let offsetCipher = parseInt(document.getElementById('keyEncrypt').value); //offset que introduce el usuario, convertida a número (esto es necesario para que la fórmula funcione!!)

// const encode = (offset,string) => {
	
// 	for (var i = 0; i < string.length; i++) { //contador para obtener cada letra del string
// 		let character = string.charCodeAt(i); // cada letra del string en código ASCII
// 		//console.log(character);
// 		let characterCiphered = (character - 65 + offsetCipher) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
// 		//console.log(characterCiphered);
// 		stringCiphered.push(String.fromCharCode(characterCiphered)); //array del texto cifrado en ASCII
// 		let output= stringCiphered.join(''); //une el array para que se vea como un texto 
// 		//console.log(output); //imprime el resultado en la consola, para poderlo enviar al html
// 		document.getElementById('resultEncrypt').innerHTML = output; //envía el resultado al p element resulEncrypt
		
// 	}
// }
// //TERMINA FUNCIÓN ENCODE

// //COMIENZA FUNCIÓN DECODE!!!
let stringToDecipher = document.getElementById('messageDecrypt').value; //string que introduce el usuario para cifrar
let stringDeciphered = []; //array donde se almacenará el texto cifrado con el método push
let offsetDecipher = parseInt(document.getElementById('keyDecrypt').value); //offset que introduce el usuario, convertida a número (esto es necesario para que la fórmula funcione!!)

// const decode = (offset,string) => {
	
// 	for (var i = 0; i < string.length; i++) { //contador para obtener cada letra del string
// 		let characterDe = string.charCodeAt(i); // cada letra del string en código ASCII
// 			//console.log(characterDe); // caracter que se va a descifrar en codigo ASCII
// 		let characterDeciphered = (characterDe + 65 - offsetDecipher) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
// 			//console.log(characterDeciphered); // log del caracter descifrado
// 		stringDeciphered.push(String.fromCharCode(characterDeciphered)); //array del texto cifrado en ASCII
// 		let outputDe= stringDeciphered.join(''); //une el array para que se vea como un texto 
// 			//console.log(outputDe); //imprime el resultado en la consola, para poderlo enviar al html
// 		document.getElementById('resultDecrypt').innerHTML = outputDe; //envía el resultado al p element resulEncrypt
		
// 	}
// }
// //TERMINA FUNCIÓN DECODE

