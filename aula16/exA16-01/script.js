let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flist');
let resp = document.querySelector('div#resp');
let valores = [];

function isNumber(n) {
	if (Number(n) >= 1 && Number(n) <= 100) {
		return true;
	} else {
		return false;
	}
}

function inList(n, l) {
	if (l.indexOf(Number(n)) != -1) {
		return true;
	} else {
		return false;
	}
}

function adicionar() {
	if (isNumber(num.value) && !inList(num.value, valores)) {
		valores.push(Number(num.value));
		let item = document.createElement('option');
		item.text = `Valor ${num.value} adicionado.`;
		list.appendChild(item);
		resp.innerHTML = '';
	} else {
		window.alert('Valor inválido ou já encontrado na lista.');
	}
	num.value = '';
	num.focus();
}
function finalizar() {
	if (valores.length == 0) {
		window.alert('Adicione valores antes de finalizar!');
	} else {
		let total = valores.length;
		let maior = valores[0];
		let menor = valores[0];
		let soma = 0;
		let media = 0;
		for (let pos in valores) {
			soma += valores[pos];
			if (valores[pos] > maior) maior = valores[pos];
			if (valores[pos] < menor) menor = valores[pos];
		}
		media = soma / total;
		resp.innerHTML = '';
		resp.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
		resp.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
		resp.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
		resp.innerHTML += `<p>Somando os valores, temos ${soma}.</p>`;
		resp.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
	}
}
