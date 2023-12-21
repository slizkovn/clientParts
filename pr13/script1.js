const centeredImg = document.getElementById('centeredImg');
const messageBox = document.createElement('div');
messageBox.classList.add('message-box1');
document.body.appendChild(messageBox);
  
centeredImg.onload = function() {
  positionImage();
};
  
function positionImage() {
  const imgWidth = centeredImg.width;
  const imgHeight = centeredImg.height;
  centeredImg.style.left = (window.innerHeight - imgHeight) / 2 + 'px';
  centeredImg.style.top = (window.innerWidth - imgWidth) / 2 + 'px';
}
  
window.addEventListener('resize', positionImage);
  
document.addEventListener('click', function(event) {
  const clickX = event.clientX;
  const clickY = event.clientY;
  
  messageBox.innerText = 'Clicked at ('+clickX+', ' +clickY+')';
  messageBox.style.top = clickY + 'px';
  messageBox.style.left = clickX + 'px';
  messageBox.style.display = 'block';
  setTimeout(() => {
    messageBox.style.display = 'none';
  }, 2000);
});