import Card  from "./Card.js";
import FormValidator from './FormValidator.js';

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

//Объект элементов
const config = {
  formSelector: '.popup__form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_btn_notactive',
  inputErrorClass: 'form__field_error_active',
  errorClass: 'form__field-error_status_error'
 };

//Включаем валидацию форм
const formValidatorEdit = new FormValidator(config, profileFormPopup);
const formValidatorCard = new FormValidator(config, formCardsPopup);

formValidatorEdit.enableValidation();
formValidatorCard.enableValidation();


//функция закрытия попапа по esc:
function handleEscPopup(event) {
  const key = event.key;
  if (key === 'Escape') {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

//Функция закрытия попапа по оверлею и крестику
function handleClickOverlay(evt) {
  const popup = document.querySelector(".popup_opened");
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')
  ) {
    closePopup(popup);
  }
};

// Функция для открытия попапа 
function openPopup (popup) {
  popup.classList.add('popup_opened');
  //вешаем слушателя на нажатие кнопки Esc и оверлею
  document.addEventListener('keydown', handleEscPopup);
  popup.addEventListener("mousedown", handleClickOverlay);
};

// Функция добавление информации в поля ввода профиля
function addProfileOpenPopup () {
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
  openPopup (profilePopup);
  //проверяем поля на валидность при открытии попапа
  formValidatorEdit.toggleButtonState();
  formValidatorEdit.hideInputSelectorError();
};

// Слушатель для открытия попапа с данными в форме 
profilePopupOpenButton.addEventListener('click', addProfileOpenPopup);

// Функция для закрытия попапа
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  //удаляем слушателя на нажатие кнопки Esc и оверлею
  document.removeEventListener('keydown', handleEscPopup);
  popup.removeEventListener("mousedown", handleClickOverlay);
};

// Слушатель для закрытия попапа с данными в форме Закрытие попапа
profileСlosePopup.addEventListener('click', () => closePopup(profilePopup));

// Функция для изменения донных в профиле из формы и зякрытие попапа evt.preventDefault() отменяет стандартную отправку формы 
function submitProfileForm (evt) {
  evt.preventDefault();
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
};

// Отправа формы
profileFormPopup.addEventListener('submit', submitProfileForm);

// функция открытия попапа добавление катрочек и редактирование полей
function openAddCardPopup () {
  openPopup (popupAddCards);
  formValidatorCard.toggleButtonState();
  formValidatorCard.hideInputSelectorError();
  formCardsPopup.reset();
};
 
 // Слушатель открытие попапа добавление карточек
buttonAddCards.addEventListener('click', openAddCardPopup);
 
//закрытие попапа добавление карточек
cardsClosePopup.addEventListener('click', () => closePopup (popupAddCards));

// Перебираем массив и добавляем рарточки по дефолту на
initialCards.forEach((item) => {
  const card = new Card(item, '.elements', handleCardClick);
  const cardElement = card.generateCard();
  // Добавляем в DOM
  usersOnline.prepend(cardElement);
});

//функция  открытие попапа просмотра карточек 
function handleCardClick (link, name) {
  openPopup (popupClosCards);
  imageCardsmage.src = link;
  imageCardsmage.alt = name;
  figcaption.textContent = name;
};

// обработчик закрытия попапа просмотра картинок и добавление информации
buttnClosePopupCards.addEventListener('click', () => closePopup(popupClosCards));


// Функция отправки формы с данными карты
function submitAddCardForm(evt) {
  evt.preventDefault();
  //переменные для полей ввода
  const formItemLinks = inputLinkCards.value;
  const formItemTitle = imputTitleCards.value;
  //создаем объект с полями ввода формы
  const element = {
  link: formItemLinks,
  name: formItemTitle,
  }
  // берем сласс карточки и аргументом подставляем данные полей ввода 
  const cardForm = new Card(element, '.elements', handleCardClick);
  const cardElementForm = cardForm.generateCard();
  // Добавляем в DOM
  usersOnline.prepend(cardElementForm);
  
  // закрываем попап
  closePopup (popupAddCards);
  // очищаем поля
  formCardsPopup.reset();
};

// Слушатель на форму для добавления картинок и подписи
formCardsPopup.addEventListener('submit', submitAddCardForm);
