const card = document.getElementById("card");
const cardWrapper = document.getElementById("cardWrapper");
card.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "move";
});

card.addEventListener("dragend", (event) => {
  card.style.position = "absolute";
  card.style.left = `${event.pageX - card.offsetWidth / 2}px`;
  card.style.top = `${event.pagey - card.offsetHeight / 2}px`;
});

card.addEventListener("drop", (event) => {
  card.style.position = "absolute";
  card.style.left = `${event.pageX - card.offsetWidth / 2}px`;
  card.style.top = `${event.pagey - card.offsetHeight / 2}px`;
});

cardWrapper.addEventListener("dragover", (event) => {
  event.preventDefault();
});

cardWrapper.addEventListener("drop", (event) => {
  event.preventDefault();

  card.style.opacity = "1";
  card.style.position = "absolute";
  card.style.left = `${event.pageX - card.offsetWidth / 2}px`;
  card.style.top = `${event.pageY - card.offsetHeight / 2}px`;
});


navigator.mediaDevices.getUserMedia({video:true},).then((strem)=>{
    var video = document.getElementById('video');
    video.srcObject= strem
})