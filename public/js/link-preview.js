// Sistema de prévia de links estilo Wikipedia
(function() {
  const preview = document.getElementById('link-preview');
  
  if (!preview) {
    console.warn('Elemento #link-preview não encontrado');
    return;
  }

  let previewTimeout;

  // Seleciona todos os links com data-preview
  const links = document.querySelectorAll('a[data-preview]');

  links.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
      const previewText = this.getAttribute('data-preview');
      
      if (!previewText) return;

      // Limpa timeout anterior se existir
      clearTimeout(previewTimeout);

      // Mostra a prévia após 300ms (evita prévias rápidas demais)
      previewTimeout = setTimeout(() => {
        preview.textContent = previewText;
        preview.classList.add('show');
        positionPreview(e, this);
      }, 300);
    });

    link.addEventListener('mousemove', function(e) {
      if (preview.classList.contains('show')) {
        positionPreview(e, this);
      }
    });

    link.addEventListener('mouseleave', function() {
      clearTimeout(previewTimeout);
      preview.classList.remove('show');
    });
  });

  function positionPreview(event, element) {
    const rect = element.getBoundingClientRect();
    const previewRect = preview.getBoundingClientRect();
    
    // Posiciona abaixo do link
    let top = rect.bottom + 10;
    let left = rect.left;

    // Ajusta se sair da tela à direita
    if (left + previewRect.width > window.innerWidth) {
      left = window.innerWidth - previewRect.width - 20;
    }

    // Ajusta se sair da tela abaixo
    if (top + previewRect.height > window.innerHeight) {
      top = rect.top - previewRect.height - 10;
    }

    // Garante que não saia pela esquerda
    if (left < 10) {
      left = 10;
    }

    preview.style.top = `${top}px`;
    preview.style.left = `${left}px`;
  }

  // Remove prévia ao rolar a página
  window.addEventListener('scroll', function() {
    clearTimeout(previewTimeout);
    preview.classList.remove('show');
  }, { passive: true });

  console.log(`Sistema de prévias inicializado com ${links.length} links`);
})();