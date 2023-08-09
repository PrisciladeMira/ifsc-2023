const preco = Number(prompt("Preço R$: "));
const avista = preco - (preco*0.10);
const parcelado = preco / 3;

alert("À vista R$: " + avista + ". Ou 3x: " + parcelado);