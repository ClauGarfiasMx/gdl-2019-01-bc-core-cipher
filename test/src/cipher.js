

const encode = (offset,string) => {
	const stringCiphered = []; //array para almacenar los caracteres cifrados
	
	for (let i = 0; i < string.length; i++) { //contador para obtener cada letra del string
		let character = string.charCodeAt(i); // cada letra del string en código ASCII
		let characterCiphered = (character - 65 + offset) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
		stringCiphered.push(String.fromCharCode(characterCiphered)); // envía al array los caracteres cifrados en ASCII
	}
	const output = stringCiphered.join(''); //une los caracteres del array y los almacena en output
	return output;
};


const decode = (offset,string) => {
	const stringDeciphered = []; //array para almacenar los caracteres cifrados
	
	for (let i = 0; i < string.length; i++) { //contador para obtener cada letra del string
		let character = string.charCodeAt(i); // cada letra del string en código ASCII
		let characterDeciphered = (character + 65 - offset) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
		stringDeciphered.push(String.fromCharCode(characterDeciphered)); // envía al array los caracteres cifrados en ASCII
	}
	const output = stringDeciphered.join(''); //une los caracteres del array y los almacena en output
	return output;
};


window.cipher = {
	encode: encode,
	decode: decode,
  // ... 
};


