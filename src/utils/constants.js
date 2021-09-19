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

// обект валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_btn_notactive',
  inputErrorClass: 'form__field_error_active',
  errorClass: 'form__field-error_status_error'
};

// Массив с данными карточек
const initialCards = [
  {
    link: './src/images/kirill-pershin-1088404.jpg',
    name: 'Карачаево-Черкесия'
  },
  {
    link: './src/images/kirill-pershin-1404681-unsplash.png',
    name: 'Гора Эльбрус'
  },
  {
    link: './src/images/kirill-pershin-1556355-unsplash.jpg',
    name: 'Домбай'
  },
  {
    link: './src/images/photo-grid-baikal-2.jpg',
    name: 'Байкал'
  },
  {
    link: './src/images/photo-grid-sochi.jpg',
    name: 'Сочи'
  },
  {
    link: './src/images/place-karelia.jpg',
    name: 'Карелия'
  },
];

export { profilePopupOpenButton, profTitle, profSubtitle, profilePopup, profileСlosePopup, nameInput, jobInput, 
  profileFormPopup, popupAddCards, buttonAddCards, cardsClosePopup, formCardsPopup, imputTitleCards, inputLinkCards, 
  usersOnline, popupClosCards, imageCardsmage, imagePopup, buttnClosePopupCards, figcaption, config, initialCards }