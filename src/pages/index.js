import '../pages/index.css';

import Card  from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from "../components/UserInfo.js";
import { 
  profilePopupOpenButton, nameInput, jobInput, profileFormPopup, buttonAddCards, formCardsPopup, 
  imputTitleCards, inputLinkCards, usersOnline, imageCardsmage, buttnClosePopupCards, 
  figcaption, config, initialCards } from '../utils/constants.js';

  
//Включаем валидацию форм
const formValidatorEdit = new FormValidator(config, profileFormPopup);
const formValidatorCard = new FormValidator(config, formCardsPopup);

formValidatorEdit.enableValidation();
formValidatorCard.enableValidation();

// Попап  просмотр картинок
const popupShowImageCards = new PopupWithImage('.popup_content_image', imageCardsmage, figcaption);
popupShowImageCards.setEventListeners();

//функция  открытие попапа просмотра карточек 
function handleCardClick (link, name) {
  popupShowImageCards.openPopup({ linkElement: link, titleElement: name});
};

// обработчик закрытия попапа просмотра картинок и добавление информации
buttnClosePopupCards.addEventListener('click', () => popupShowImageCards.closePopup('.popup_content_image'));

//Данные профиля на странице
const infoProfile = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__subtitle'});


// Попап редактирование профиля
const popupWithProfile = new PopupWithForm('.popup_profile_editing', editProfile);
popupWithProfile.setEventListeners();

// Открываем попап редактирование профиля
profilePopupOpenButton.addEventListener('click', openedProfileInfo);

//Функция открытия попапа редактирование профиля 
function openedProfileInfo () {
  const userProfile = infoProfile.getUserInfo();
  nameInput.value = userProfile.name;
  jobInput.value = userProfile.info;
  popupWithProfile.openPopup();
  formValidatorEdit.toggleButtonState();
  formValidatorEdit.hideInputSelectorError();
};

//Функция изменения информации в профиле
function editProfile () {
  infoProfile.setUserInfo({name: nameInput.value, info: jobInput.value });
  popupWithProfile.closePopup()
};

// Попап добавлениие карточек
const popupCardsAdd = new PopupWithForm('.popup_container_cards', submitAddCardForm);
popupCardsAdd.setEventListeners();

//Функция открытие попапа добавления карточек
function openPopupAddCards () {
  popupCardsAdd.openPopup();
  formValidatorCard.toggleButtonState();
  formValidatorCard.hideInputSelectorError();
};

// Слушатель открытие попапа добавление карточек
buttonAddCards.addEventListener('click', openPopupAddCards);

// Функция отрисовки карточки через форму
function submitAddCardForm() {
  const formItemLinks = inputLinkCards.value;
  const formItemTitle = imputTitleCards.value;
  //Создаем объект сполями ввода
  const element = {
  link: formItemLinks,
  name: formItemTitle,
  }
  // создаем карточку
  const newCardForm = createCards(element)
  //Размещаем карточку на странице
  defaultCardList.addItem(newCardForm);
  popupCardsAdd.closePopup()
};

// Функция создания карточек
const createCards = (item) => {
  const card = new Card(item, '.elements', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

// Добавляем карточки по дефолту
const defaultCardList = new Section ({
  //массив карточек
  items: initialCards,
  //функция отвечает за создание и отрисовку данных на странице.
  renderer: (item) => {
    const cards = createCards(item);
    defaultCardList.addItem(cards);
  }
},
usersOnline
);

defaultCardList.initialCards();


