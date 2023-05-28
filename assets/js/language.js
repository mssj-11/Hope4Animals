/* LANGUAJES */
const selectLanguaje = document.querySelector('.lang-switch');
const buttonLanguaje = document.querySelectorAll('option');
const languaje = document.querySelector('.dropdown-toggle');
const linkHome = document.querySelector('.linkInicio'),
        linkAbout = document.querySelector('.linkSobre'),
        linkService = document.querySelector('.linkServicio'),
        linkDonate = document.querySelector('.linkDonar'),
        linkEvent = document.querySelector('.linkEvent');

buttonLanguaje.forEach(button => {
  button.addEventListener('click', () => {
    selectLanguaje.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const attribute = button.getAttribute('language');
    languaje.textContent = data[attribute].languaje;
    linkHome.textContent = data[attribute].linkhome;
    linkAbout.textContent = data[attribute].linkabout;
    linkService.textContent = data[attribute].linkservice;
    linkDonate.textContent = data[attribute].linkdonate;
    linkEvent.textContent = data[attribute].linkevent;
  });
});


const data = {
  "english":
  {
    "languaje": "Languaje",
    "linkhome": "Home",
    "linkabout": "About",
    "linkservice": "Service",
    "linkdonate": "Donate",
    "linkevent": "Event"
  },
  "spanish":
  {
    "languaje": "Idioma",
    "linkhome": "Inicio",
    "linkabout": "Sobre",
    "linkservice": "Servicio",
    "linkdonate": "Donar",
    "linkevent": "Evento"
  }
};