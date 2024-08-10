const sidebar = document.querySelector('.sidebar');
const sidebarItems = document.querySelectorAll('.sidebar__item');
const sidebarBox = document.querySelector('.sidebar__hide-box');
const hideButton = document.querySelector('.sidebar__hide');
const sidebarTexts = document.querySelectorAll('.sidebar__text');
const sidebarHideImg = document.querySelector('.sidebar__hide-img');
const buttonsBox = document.querySelector('.locations__button-box');
const locationButtonsBox = document.querySelectorAll('.locations__button');
const buttonCreate = document.querySelector('.locations__button-create');
const sectionСhange = document.querySelector('.change');
const sectionCreate = document.querySelector('.create');
const listPopups = document.querySelectorAll(".popup");
const changeLocation = document.querySelector('.locations__edit');

listPopups.forEach((popup) => {
  popup.addEventListener("click", function(event) {
    if(event.target === event.currentTarget) {
       closeForm(popup);
    }
  });
});

const openForm = (popup) => {
  popup.classList.add('open');
  document.addEventListener('keydown', closeEsc)
}

const closeForm = (popup) => {
  popup.classList.remove('open');
  document.removeEventListener('keydown',  closeEsc);
}

const closeEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.open');
    closeForm(openPopup); 
  }
} 

buttonCreate.addEventListener("click", () => {
  openForm(sectionCreate);
});

changeLocation.addEventListener("click", () => {
  openForm(sectionСhange);
});






buttonsBox.addEventListener('click', (evt) => {
  locationButtonsBox.forEach((button) => {
    button.classList.remove('locations__button_active');
  });
  if (evt.target.classList.contains('locations__button')) {
    evt.target.classList.add('locations__button_active');
  } 
});

sidebarItems.forEach((item) => {
  item.addEventListener('click', (evt) => {
    sidebarItems.forEach((element) => {
      element.classList.remove('sidebar__item_active');
    });
  item.classList.add('sidebar__item_active');
  });
});


sidebarBox.addEventListener('click', () => {
  sidebarTexts.forEach(text => {
    text.classList.toggle('sidebar__text_hidden');
  });
  
  const isCollapsed = sidebar.classList.toggle('.sidebar_collapsed');

  if (isCollapsed) {
    hideButton.style.display = 'none';
    sidebarBox.style.marginLeft = '15px';
    sidebarHideImg.classList.add('sidebar__hide-img_rotate');
  } else {
    hideButton.style.display = 'block';
    sidebarBox.style.marginLeft = '70px'; 
    sidebarHideImg.classList.remove('sidebar__hide-img_rotate');
  }
});
