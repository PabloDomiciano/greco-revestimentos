function changeLogoSize(change) {
  const logo = document.querySelector(".logo-image");
  if (!logo) return;

  const currentSize = parseInt(getComputedStyle(logo).width);
  const newSize = currentSize + change;

  // Definir limites mínimo e máximo
  if (newSize >= 100 && newSize <= 250) {
    logo.style.width = `${newSize}px`;
    // Salvar a preferência do usuário
    localStorage.setItem("logoSize", newSize);
  }
}
