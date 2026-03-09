const pixArea = document.getElementById("pix-area");
const cartaoArea = document.getElementById("cartao-area");
const finalizarPagamento = document.getElementById("finalizar-pagamento");

document.querySelectorAll('input[name="pagamento"]').forEach(opcao => {

  opcao.addEventListener("change", function() {

    if (this.value === "pix") {

      pixArea.style.display = "block";
      cartaoArea.style.display = "none";
      finalizarPagamento.style.display = "block";

    }

    if (this.value === "cartao") {

      pixArea.style.display = "none";
      cartaoArea.style.display = "block";
      finalizarPagamento.style.display = "block";

    }

  });

});