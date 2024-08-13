const settingsBoxButtons = document.querySelector('.settings__box-button');
const settingsButtons = document.querySelectorAll('.settings__button');

settingsBoxButtons.addEventListener('click', (evt) => {
  settingsButtons.forEach((button) => {
    button.classList.remove('settings__button_active');
  });
  if (evt.target.classList.contains('settings__button')) {
    evt.target.classList.add('settings__button_active');
  } 
});