// cоздаем массив__________________________________________
const initialCards = [
  {
    link: './images/kirill-pershin-1088404.jpg',
    name: 'Карачаево-Черкесия'
  },
  {
    link: './images/kirill-pershin-1404681-unsplash.png',
    name: 'Гора Эльбрус'
  },
  {
    link: './images/kirill-pershin-1556355-unsplash.jpg',
    name: 'Домбай'
  },
  {
    link: './images/photo-grid-baikal-2.jpg',
    name: 'Байкал'
  },
  {
    link: './images/photo-grid-sochi.jpg',
    name: 'Сочи'
  },
  {
    link: './images/place-karelia.jpg',
    name: 'Карелия'
  },
];
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profTitle = document.querySelector('.profile__title');
const profSubtitle = document.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('.popup_profile_editing');
const profileСlosePopup = document.querySelector('.popup__close-icon_profile_edit');
const nameInput = document.querySelector('.form__field_item_name');
const jobInput = document.querySelector('.form__field_item_job');
const profileFormPopup = document.querySelector('.form_profile_edit');
// переменные для попапа добавление карточек
const popupAddCards = document.querySelector('.popup_container_cards');
const buttonAddCards = document.querySelector('.profile__add-button');
const cardsClosePopup = document.querySelector('.popup__close-icon_close_cards');
const formCardsPopup = document.querySelector('.popup__form_add_cards');
const imputTitleCards = document.querySelector('.form__field_item_title');
const inputLinkCards = document.querySelector('.form__field_item_link');
const usersOnline = document.querySelector('.template-container');
const popupClosCards = document.querySelector('.popup_content_image');
const imageCardsmage = document.querySelector('.popup__image');
const imagePopup = document.querySelector('.template-container');
const buttnClosePopupCards = document.querySelector('.popup__close-icon_close_image');
const figcaption = document.querySelector('.popup__image-caption');

// Функция для открытия попапа 
function openPopup (popup) {
  popup.classList.add('popup_opened');
  
}
// Функция добавление информации в поля ввода профиля
function addProfileOpenPopup () {
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
  openPopup (profilePopup);
}
// Слушатель для открытия попапа с данными в форме 
profilePopupOpenButton.addEventListener('click', addProfileOpenPopup );

// Функция для закрытия попапа
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}
// Функция для закрытия попапа
function handleClosePopup() {
  closePopup(profilePopup);
} 
// Слушатель для закрытия попапа с данными в форме Закрытие попапа
profileСlosePopup.addEventListener('click', handleClosePopup);

// Функция для изменения донных в профиле из формы и зякрытие попапа evt.preventDefault() отменяет стандартную отправку формы 
function submitProfileForm (evt) {
  evt.preventDefault();
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}
// Отправа формы
profileFormPopup.addEventListener('submit', submitProfileForm);
 
// Функция открытия попапа добавление карточек 
function openPopupAddCarts () {
  openPopup (popupAddCards);
}

 // Слушатель открытие попапа добавление карточек
buttonAddCards.addEventListener('click', openPopupAddCarts);
 
// Функция закрытия попапа добавление катрочек 
function closePopupAddCart () {
  closePopup (popupAddCards);
}
//закрытие попапа добавление карточек
cardsClosePopup.addEventListener('click', closePopupAddCart);

// Дефолтное создание карточек
initialCards.forEach(function (elementInitial){
  const newCard = createCard (elementInitial);
  // Добавление карточек в контейнер 
  renderCards (newCard);
});

// Функция создания карточки 
  function createCard (element) {
  const userTemplate = document.querySelector('.elements').content;
  const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
  // наполняем содержимым  
  const newElementImage = userElement.querySelector('.elements__image');
  const newElementText = userElement.querySelector('.elements__text');
  newElementImage.src = element.link;
  newElementImage.alt = element.name;
  newElementText.textContent = element.name;
  //Ставим лайк
  userElement.querySelector('.elements__group').addEventListener('click', lekeCardsAdd );
  // Удаляем карточки
  userElement.querySelector('.elements__btn_action_del').addEventListener('click', deleteCardsAdd);
  // обработчик открытия попапа просмотра картинок и добавление информации
  newElementImage.addEventListener('click', addCardsContainer);
  return userElement
};


// функция добавление карточки на страницу
function renderCards (newCard) {
  usersOnline.prepend(newCard);
};

//функция  открытие попапа просмотра карточек 
function addCardsContainer (evt) {
  openPopup (popupClosCards);
  imageCardsmage.src = evt.target.src;
  imageCardsmage.alt = evt.target.alt;
  figcaption.textContent =  evt.target.alt;
};
// обработчик закрытия попапа просмотра картинок и добавление информации
buttnClosePopupCards.addEventListener('click', closePopupLookCards);

// функция закрытия попапа просмотра карточек
function closePopupLookCards () {
  popupClosCards.classList.remove('popup_opened');
};

// функция лайка
function lekeCardsAdd (evt) {
  evt.target.classList.toggle('elements__group_like_active');
};
// функция удаление карточки
function deleteCardsAdd (evt) {
  evt.target.closest('.elements__element').remove();
};

// Функция отправки формы с данными карты
function submitAddCardFrom(evt) {
  //переменные для полей ввода
  const formItemLinks = inputLinkCards.value;
  const formItemTitle = imputTitleCards.value;
  //создаем объект с полями ввода формы
  const element = {
  link: formItemLinks,
  name: formItemTitle,
  }
  evt.preventDefault();
  usersOnline.prepend(createCard (element));
  closePopup (popupAddCards);
  formCardsPopup.reset();
}
// Слушатель на форму для добавления картинок и подписи
formCardsPopup.addEventListener('submit', submitAddCardFrom);

