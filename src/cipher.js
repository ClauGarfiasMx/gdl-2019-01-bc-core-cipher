

const encode = (offset,string) => {
	
	for (var i = 0; i < string.length; i++) { //contador para obtener cada letra del string
		let character = string.charCodeAt(i); // cada letra del string en código ASCII
			//console.log(character);
		let characterCiphered = (character - 65 + offsetCipher) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
			//console.log(characterCiphered);
		stringCiphered.push(String.fromCharCode(characterCiphered)); //array del texto cifrado en ASCII

		let output= stringCiphered.join(''); //une el array para que se vea como un texto 
			//console.log(output); //imprime el resultado en la consola, para poderlo enviar al html
		document.getElementById('resultEncrypt').innerHTML = output; //envía el resultado al p element resulEncrypt

		
	}
	return output;
}


const decode = (offset,string) => {
	
	for (var i = 0; i < string.length; i++) { //contador para obtener cada letra del string
		let characterDe = string.charCodeAt(i); // cada letra del string en código ASCII
			//console.log(characterDe); // caracter que se va a descifrar en codigo ASCII
		let characterDeciphered = (characterDe + 65 - offsetDecipher) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
			//console.log(characterDeciphered); // log del caracter descifrado
		stringDeciphered.push(String.fromCharCode(characterDeciphered)); //array del texto cifrado en ASCII
		let outputDe= stringDeciphered.join(''); //une el array para que se vea como un texto 
			//console.log(outputDe); //imprime el resultado en la consola, para poderlo enviar al html
		document.getElementById('resultDecrypt').innerHTML = outputDe; //envía el resultado al p element resulEncrypt
		
		
	}
	return outputDe;
}


window.cipher = {
	encode: encode,
	decode: decode,
  // ... 
};

