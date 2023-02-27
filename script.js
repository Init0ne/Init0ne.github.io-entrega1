function animarTarjeta(id, nuevoTexto, textoOriginal) {
  const card = document.querySelector(id);

  card.addEventListener('mouseover', () => {
    card.textContent = nuevoTexto;
  });
  console.log(nuevoTexto)
  card.addEventListener('mouseout', () => {
    card.textContent = textoOriginal;
  });

}