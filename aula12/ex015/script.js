function verificar() {
	var data = new Date();
	var ano = data.getFullYear();
	var fano = document.getElementById('txtano');
	var res = document.querySelector('div#res');
	if (fano.value.length == 0 || Number(fano.value) > ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente!');
	} else {
		var fsex = document.getElementsByName('radsex');
		var idade = ano - Number(fano.value);
		var genero = '';
		var img = document.createElement('img');
		img.setAttribute('id', 'foto');
		if (fsex[0].checked) {
			genero = 'Homem';
			if (idade >= 0 && idade < 2) {
				//Bebe
				img.setAttribute('src', 'img/bebeMasc.png');
			} else if (idade >= 2 && idade < 10) {
				//Criança
				img.setAttribute('src', 'img/criancaMasc.png');
			} else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'img/jovemMasc.png');
			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'img/adultoMasc.png');
			} else {
				//Idoso
				img.setAttribute('src', 'img/idosoMasc.png');
			}
		} else if (fsex[1].checked) {
			genero = 'Mulher';
			if (idade >= 0 && idade < 2) {
				//Bebe
				img.setAttribute('src', 'img/bebeFem.png');
			} else if (idade >= 2 && idade < 10) {
				//Criança
				img.setAttribute('src', 'img/criancaFem.png');
			} else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'img/jovemFem.png');
			} else if (idade < 50) {
				//Adulta
				img.setAttribute('src', 'img/adultoFem.png');
			} else {
				//Idosa
				img.setAttribute('src', 'img/idosoFem.png');
			}
		}
		res.style.textAlign = 'center';
		res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
		res.appendChild(img);
	}
}
