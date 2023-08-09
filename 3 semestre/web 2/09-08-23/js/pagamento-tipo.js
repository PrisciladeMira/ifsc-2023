    function calcularValores() {
      // Lê o preço do produto do input
      const precoProduto = parseFloat(document.getElementById("preco").value);

      // Calcula o valor com desconto de 10%
      const valorAVista = precoProduto * 0.9;

      // Calcula o valor em 3x
      const valorParcelado = precoProduto / 3;

      // Exibe os resultados
      document.getElementById("avista").textContent = "Valor à vista com desconto: R$" + valorAVista.toFixed(2);
      document.getElementById("parcelado").textContent = "Valor parcelado em 3x: R$" + valorParcelado.toFixed(2);
    }