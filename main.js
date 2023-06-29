 var animatedHand = document.getElementById('animated-hand');
 var startY = 10; // Position de départ en pixels
 var endY = 3; // Position d'arrivée en pixels
 var duration = 1900; // Durée de l'animation en millisecondes
 var startTime = null;

 function animateHand(timestamp) {
   if (!startTime) startTime = timestamp;
   var progress = timestamp - startTime;
   var translateY = easeInOutQuad(progress, startY, endY - startY, duration);
  animatedHand.style.transform = 'translateY(' + translateY + 'px)';

   if (progress < duration) {
     requestAnimationFrame(animateHand);
  } else {
    startY = endY;
    endY = startY === 0 ? 100 : 0;
   startTime = null;
    requestAnimationFrame(animateHand);
   }
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
   if (t < 1) return c / 2 * t * t + b;
   t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
 }

 animateHand();



 