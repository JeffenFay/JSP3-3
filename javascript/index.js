//Écouteur qui change la couleur en vert
document.getElementsByClassName('color')[0].addEventListener('click', function() {
  document.getElementById('text').style.color = 'green';
});
//Écouteur qui change la couleur en rouge
document.getElementsByClassName('color')[1].addEventListener('click', function() {
  document.getElementById('text').style.color = 'red';
});
//Écouteur qui change la couleur en bleu
document.getElementsByClassName('color')[2].addEventListener('click', function() {
  document.getElementById('text').style.color = 'blue';
});
