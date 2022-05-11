const inputTextoe= document.querySelector(".textoencriptar");
const mensajee=document.querySelector(".respuestaencriptar");
const inputTextod= document.querySelector(".textodesencriptar");
const mensajed=document.querySelector(".respuestadesencriptar");


function btnencriptar(){
	const textoEncriptado = encriptar(inputTextoe.value)
	mensajee.value = textoEncriptado;
}
function encriptar(StringParaEncriptar){ 
	StringParaEncriptar = StringParaEncriptar.replace(/a/g,"ai")
	.replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
	return StringParaEncriptar;
}

function btndesencriptar(){ 
	const textoDesencriptado = desencriptar(inputTextod.value)
	mensajed.value = textoDesencriptado;
}

function desencriptar(StringParaDesencriptar){	
 	StringParaDesencriptar = StringParaDesencriptar.replace(/enter/g, "e")
	.replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
	return StringParaDesencriptar;

}
function btncopiar(){ 
	var content = document.getElementById('copioutArea');    
	content.select();
	document.execCommand('copy');
}

function btnpegar(){ 
	var content = document.getElementById('copioutArea');
	var pasteText= document.getElementById('pegainArea'); 
	pasteText.focus();

	pasteText.value =content.value  //console.log(pasteText.value);
	document.querySelector(".input-text-area");
}























