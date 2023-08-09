const frm = document.querySelector("form");//document = dom
const resp = document.querySelector("h3");

frm.addEventListener("submit", (evento) => {
    const nome = frm.inNome.value;
    const idade = frm.inIdade.value;
    const cidade = frm.inCidade.value;
    resp.innerText = `Olá ${nome}, você tem ${idade} anos e mora em ${cidade}, que legal!`;
    evento.preventDefault(); //evita falta de envio do formulário
});