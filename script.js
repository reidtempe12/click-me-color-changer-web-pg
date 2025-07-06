function changeColor() {
  const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#fd79a8'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
