function carregar() {
	var msg = window.document.getElementById('msg');
	var img = window.document.getElementById('imagem');
	var data = new Date();
	var hora = data.getHours();
	var minuto = data.getMinutes();
	var segundo = data.getSeconds();
	if (hora >= 0 && hora < 12) {
		msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas da manhã. Bom dia!`;
		img.src = 'img/dia.png';
		document.body.style.background = '#ffe585';
	} else if (hora >= 12 && hora <= 18) {
		msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas. Boa tarde!`;
		img.src = 'img/tarde.png';
		document.body.style.background = '#00b7ff';
	} else {
		msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas. Boa noite!`;
		img.src = 'img/noite.png';
		document.body.style.background = '#072458';
		document.body.style.color = '#ffffff';
	}
}
