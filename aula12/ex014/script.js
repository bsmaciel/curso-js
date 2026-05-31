function carregar() {
	var msg = window.document.getElementById('msg');
	var img = window.document.getElementById('imagem');
	var data = new Date();
	//var hora = data.getHours();
	var hora = 22;
	if (hora >= 0 && hora < 12) {
		msg.innerHTML = `Agora são ${hora} horas da manhã. Bom dia!`;
		img.src = 'dia.png';
		document.body.style.background = '#ffe585';
	} else if (hora >= 12 && hora <= 18) {
		msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`;
		img.src = 'tarde.png';
		document.body.style.background = '#00b7ff';
	} else {
		msg.innerHTML = `Agora são ${hora} horas. Boa noite!`;
		img.src = 'noite.png';
		document.body.style.background = '#072458';
		document.body.style.color = '#ffffff';
	}
}
