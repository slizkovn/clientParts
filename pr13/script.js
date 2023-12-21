/*
document.addEventListener('DOMContentLoaded', function() {
  const centeredImage = document.getElementById('centered-image');
  const centeredContainer = document.getElementById('centered-container');

  centeredContainer.addEventListener('click', function(event) {
    const x = event.clientX - centeredContainer.offsetLeft;
    const y = event.clientY - centeredContainer.offsetTop;

    console.log("Clicked at (" + x + ", " + y + ")");
  });
});

*/

window.onload = function() {
  var img = document.createElement('img');
  img.src = 'https://w.forfun.com/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg';
  img.height = "100px";
  img.style.position = 'absolute';
  document.body.appendChild(img);

  document.onclick = function(event) {
    var x = event.clientX - img.width / 2;
    var y = event.clientY - img.height / 2;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    console.log('Координаты клика: x=' + event.clientX + ', y=' + event.clientY);
  };
};
