// Zone pour le TypeScript JavaScript
const typeIt = new TypeIt("#title", {
    speed: 50,
    startDelay: 900,
  })
    .type("SAE Insitute Genève", { delay: 100 })
    .move(-12, { delay: 100 })
    .type("t", { delay: 400 })
    .pause(200)
    .move(null, { to: "END" })
    .break({ delay: 500 })
    .type('La meilleure école des médias créatifs.')