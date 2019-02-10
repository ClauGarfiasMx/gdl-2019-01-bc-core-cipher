const encode = (offset,string) => { // ARGUMENTOS
	const stringCiph = []; //RESULTADO EN UN ARRAY
	
	for (let i = 0; i < string.length; i++) { //BUCLE PARA ITERAR LOS CARACTERES

		let charIdx = string.charCodeAt(i);//OBTIENE EL CODIGO ASCII

		if (charIdx >= 32 && charIdx <= 64){ //PASA SIN CIFRAR ENTRE CARACTERES 32 Y 64 DEL ASCII QUE SON ALGUNOS ESPECIALES
		stringCiph.push(String.fromCharCode(charIdx));
		}
	//PARTE OBLIGATORIA AQUÍ ENCODE
		else if (charIdx >= 65 && charIdx <= 90){ //CIFRA ENTRE CARACTERES 65 Y 90 DEL ASCII
		let charCiph = (charIdx - 65 + offset) % 26 + 65; //FORMULA DE MICHELLE
		stringCiph.push(String.fromCharCode(charCiph)); //EMPUJA CADA CHAR CIFRADO AL ARRAY DEL RESULTADO
		}

		else if (charIdx >= 97 && charIdx <= 122){ //CIFRA MINÚSCULAS
		let charCiph = (charIdx - 97 + offset) % 26 + 97;
		stringCiph.push(String.fromCharCode(charCiph));

		}

		else { //RETORNA IGUAL CUALQUIERA QUE NO ENTRE EN EL RANGO DE LOS ANTERIORES
		return stringCiph.push(String.fromCharCode(charIdx));
		}

		}
	
		return stringCiph.join(''); 
	};
	

const decode = (offset,string) => { // ARGUMENTOS
	const stringDeci = [];//RESULTADO EN UN ARRAY

	for (let i = 0; i < string.length; i++) { //BUCLE PARA ITERAR LOS CARACTERES

		let charIdx = string.charCodeAt(i); //OBTIENE EL CODIGO ASCII

		if (charIdx >= 32 && charIdx <= 64){//PASA SIN DESCIFRAR ENTRE CARACTERES 32 Y 64 DEL ASCII QUE SON ALGUNOS ESPECIALES
		stringDeci.push(String.fromCharCode(charIdx));
		}
	//PARTE OBLIGATORIA AQUI DECODE
		else if (charIdx >= 65 && charIdx <= 90){
		let charDeci = (charIdx + 65 - offset) % 26 + 65;
		stringDeci.push(String.fromCharCode(charDeci));
		}
	
		else if(charIdx >= 97 && charIdx <= 122){//DESCIFRA MINÚSCULAS
			let charDeci = (charIdx + 59 - offset) % 26 + 97;
			stringDeci.push(String.fromCharCode(charDeci));
		}
	
		else {//RETORNA IGUAL CUALQUIERA QUE NO ENTRE EN EL RANGO DE LOS ANTERIORES
		return stringDeci.push(String.fromCharCode(charIdx));
		}
	}
	
	return stringDeci.join(''); 
};

window.cipher = {
	encode: encode,
	decode: decode,
};