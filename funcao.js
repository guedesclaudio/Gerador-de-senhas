var numeros = [0,1,2,3,4,5,6,7,8,9]

var letrasMinusculas = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','x','y','w','z']

var letrasMaiusculas = []

var simbolos = ['*','.','+','-']

for (var x = 0; x < letrasMinusculas.length; x++) {

	letrasMaiusculas[x] = letrasMinusculas[x].toUpperCase()
	letrasMaiusculas.push(letrasMinusculas[x])

}

function geraSenhas() {

	var template 
	var senhaNumeros = []
	var qtdNumeros = document.getElementById('Num').value
	var z = 0

	while (z < qtdNumeros) {
		senhaNumeros.push(numeros[Math.floor(Math.random() * 10)])
		z++
	}
	senhaNumeros = senhaNumeros.toString().replace(/,/g,"")


	var senhaLetrasMaiusculas = []
	var qtdLetrasMaiusculas = document.getElementById('letraMas').value
	var w = 0

	while (w < qtdLetrasMaiusculas) {
		senhaLetrasMaiusculas.push(letrasMaiusculas[Math.floor(Math.random() * 25)])
		w++
	}
	senhaLetrasMaiusculas = senhaLetrasMaiusculas.toString().replace(/,/g,"")


	var senhaLetrasMinusculas = []
	var qtdLetrasMinusculas = document.getElementById('letraMin').value
	var t = 0

	while (t < qtdLetrasMinusculas) {
		senhaLetrasMinusculas.push(letrasMinusculas[Math.floor(Math.random() * 25)])
		t++
	}
	senhaLetrasMinusculas = senhaLetrasMinusculas.toString().replace(/,/g,"")

				
	var senhaSimbolos = []
	var qtdSimbolos = document.getElementById('Simb').value
	var v = 0

	while (v < qtdSimbolos) {
		senhaSimbolos.push(simbolos[Math.floor(Math.random() * 3)])
		v++
	}
	senhaSimbolos = senhaSimbolos.toString().replace(/,/g,"")
				

	senha = `${senhaNumeros}${senhaLetrasMaiusculas}${senhaLetrasMinusculas}${senhaSimbolos}`

	if(senha == '') {
		template = `
		<h4>Sua senha é</h4>
		<input type="text" id="senha" value="Digite parâmetros válidos" disabled>
		<h4 style="margin-top:100px;">Deseja outra senha?</h4>
		<button onclick="input()" style="margin-top:10px;">Clique aqui</button>
		`
	}

	else {
		template = `
		<h4>Sua senha é</h4>
		<input type="text" id="senha" value="${senha}" disabled>
		<h4 style="margin-top:100px;">Deseja outra senha?</h4>
		<button onclick="input()" style="margin-top:10px;">Clique aqui</button>
		`
	}

	document.getElementById('container').innerHTML = template

}

function input() {

	const template1 = `
	<h3>Gerador de senhas</h3>
	<input type="text" id="Num" placeholder="Digite a quantidade de números">
	<div id="borda"></div>
	<input type="text" id="letraMas" placeholder="Digite a quantidade de letras maiúsculas">
	<div id="borda"></div>
	<input type="text" id="letraMin" placeholder="Digite a quantidade de letras minúsculas">
	<div id="borda"></div>
	<input type="text" id="Simb" placeholder="Digite a quantidade de símbolos">
	<button onclick="geraSenhas()">Gerar</button>
	`
	const pai = document.getElementById('container')

	pai.innerHTML = template1

}


function remove() {
	location.reload()
}
