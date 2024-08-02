let app = document.getElementById('app');



let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// reconoces  una acción porque tiene paréntesis
typewriter
  .typeString('Soy ')
  .pauseFor(2000)
  .typeString('Abigail García')
  .pauseFor(400)
  .deleteChars(14)
  .typeString('Desarrolladora <strong>Web</strong>')
  .pauseFor(2000)
  .start();