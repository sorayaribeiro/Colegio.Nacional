// Selecione todos os elementos com a classe "accordion-item-header"
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

const quoteElement = document.getElementById("quote");
const quoteText = quoteElement.textContent;

// Adicione um evento de clique a cada cabeçalho do item do accordion
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    // Caso você queira permitir a exibição de apenas um item recolhido por vez!

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
          currentlyActiveAccordionItemHeader.classList.toggle("active");
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

    // Alternar a classe "active" para abrir/fechar o item do accordion clicado
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    
    if (accordionItemHeader.classList.contains("active")) {
      // Se o item do accordion está aberto, defina a altura máxima do corpo para mostrar o conteúdo
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      // Se o item do accordion está fechado, defina a altura máxima do corpo para 0 para ocultar o conteúdo
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


quoteElement.textContent = "";

function typeWriter(text, index) {
  if (index < text.length) {
    quoteElement.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 50); // Tempo de atraso entre cada caractere (ajuste conforme desejado)
  }
}

window.onload = () => {
  typeWriter(quoteText, 0);
};
