
document.getElementById("po5GQ8s450").addEventListener("submit", async function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const form = event.target;
  const formData = new FormData(form);

  // Obtém a unidade selecionada pelo usuário
  const selectedunidade = formData.get("unidade");

  // Define o endpoint do Formcarry com base na unidade selecionada
  let formcarryEndpoint;
  switch (selectedunidade) {
    case "quintino":
      formcarryEndpoint = "https://formcarry.com/s/po5GQ8s450";
      break;
    case "jacarepagua":
      formcarryEndpoint = "https://formcarry.com/s/po5GQ8s450";
      break;
    default:
      alert("Por favor, selecione uma unidade válida.");
      return;
  }

  try {
    // Envia o formulário para o endpoint do Formcarry usando async/await
    const response = await fetch(formcarryEndpoint, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      // Limpa os campos do formulário
      form.reset();
      // Exibe a mensagem de sucesso
      document.getElementById("successunidade").textContent = selectedunidade;
      document.getElementById("successMessage").style.display = "block";
    } else {
      alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
    }
  } catch (error) {
    alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
  }
});