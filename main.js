let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style=" color: #F2163E; "> 3D Artist, Animator, VFX Artist and Front End Designer </span>')
  .pauseFor(2000)
  .deleteChars(10)
  .start();
