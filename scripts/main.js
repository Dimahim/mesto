let openPopup = document.querySelector('.profile__edit-button');
let profTitle = document.querySelector('.profile__title');
let profSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.form__field_item_name');
let jobInput = document.querySelector('.form__field_item_job');
let formElement = document.querySelector('.form');
// переменные для попапа добавление карточек
const popupAddCards = document.querySelector('.popup_container_cards');
const addCards = document.querySelector('.profile__add-button');
const closePopupCards = document.querySelector('.popup__close-icon_close_cards');
const formCards = document.querySelector('.popup__form_add_cards');
const imputTitleCards = document.querySelector('.form__field_item_title');
const inputLinkCards = document.querySelector('.form__field_item_link');
const usersOnline = document.querySelector('.template-container');
const popupClosCards = document.querySelector('.popup_content_image');
const imageCardsmage = document.querySelector('.popup__image');
const imagePopup = document.querySelector('.template-container');
const buttnClosePopupCards = document.querySelector('.popup__close-icon_close_image');
const figcaption = document.querySelector('.popup__image-caption');

// Функция для открытия попапа редактированиие профиля
function openedPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
}
// Функция для закрытия попапа
function closePopupIcon () {
  popup.classList.remove('popup_opened');
}
// Слушатель для открытия попапа с данными в форме 
openPopup.addEventListener('click', openedPopup);
  
// Слушатель для закрытия попапа с данными в форме Закрытие попапа
closePopup.addEventListener('click', closePopupIcon);
  

// Функция для изменения донных в профиле из формы и зякрытие попапа evt.preventDefault() отменяет стандартную отправку формы 
function formSubmitHandler (evt) {
  evt.preventDefault();
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  closePopupIcon ();
}
// Отправа формы
formElement.addEventListener('submit', formSubmitHandler);
 


// Добавление карточек
// функция открытия попапа добавление карточек
function openedPopupCards () {
  popupAddCards.classList.add('popup_opened');
}
  // открытие попапа добавление карточек
addCards.addEventListener('click', openedPopupCards);

// функция закрытия попапа добавление карточек
function closedPopupCard () {
  popupAddCards.classList.remove('popup_opened');
}
//закрытие попапа добавление карточек
closePopupCards.addEventListener('click', closedPopupCard);


// cоздаем массив__________________________________________
const initialCards = [
  {
    image: './images/kirill-pershin-1088404.jpg',
    name: 'Карачаево-Черкесия'
  },
  {
    image: './images/kirill-pershin-1404681-unsplash.png',
    name: 'Гора Эльбрус'
  },
  {
    image: './images/kirill-pershin-1556355-unsplash.jpg',
    name: 'Домбай'
  },
  {
    image: './images/photo-grid-baikal-2.jpg',
    name: 'Байкал'
  },
  {
    image: './images/photo-grid-sochi.jpg',
    name: 'Сочи'
  },
  {
    image: './images/place-karelia.jpg',
    name: 'Карелия'
  },
];

// Дефолтное создание карточек
initialCards.forEach(function (element) {
  const userTemplate = document.querySelector('.elements').content;
  const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
  // наполняем содержимым  
  userElement.querySelector('.elements__image').src = element.image;
  userElement.querySelector('.elements__text').textContent = element.name;
  userElement.querySelector('.elements__image').alt = element.name;
  
  //Ставим лайк
  userElement.querySelector('.elements__group').addEventListener('click', lekeCardsAdd );
  
  // Удаляем карточки
  userElement.querySelector('.elements__btn_action_del').addEventListener('click', deleteCardsFunc);
  
     // Загружаем карточки в контейнере
  usersOnline.append(userElement);
  ///
  userElement.querySelector('.elements__image').addEventListener('click', function (evt) {
  popupClosCards.classList.add('popup_opened');
   imageCardsmage.src = evt.target.src;
   imageCardsmage.alt = evt.target.alt;
   figcaption.textContent = evt.target.alt;
  
  function closePop () {
    popupClosCards.classList.remove('popup_opened');
  };
  buttnClosePopupCards.addEventListener('click', closePop);
  });
});

// функция лайка
function lekeCardsAdd (evt) {
  evt.target.classList.toggle('elements__group_like_active');
};
 // функция удаление карточки
function deleteCardsFunc (evt) {
  evt.target.closest('.elements__element').remove();
};
//функция  открытие попапа просмотра карточек 
function addCardsContainer (evt) {}












  //______________________________________________________________________________________________________
  // Добавление карточек

function addCardsElement(inputLinkCards, imputTitleCards) {
// берем шаблон тега template
  const userTemplate = document.querySelector('.elements').content;
// клонируем содержимое тега template
  const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
// наполняем содержимым
  userElement.querySelector('.elements__image').src = inputLinkCards;
  userElement.querySelector('.elements__text').textContent = imputTitleCards;
  userElement.querySelector('.elements__image').alt = imputTitleCards;
    // ставим лайк
  userElement.querySelector('.elements__group').addEventListener('click', lekeCardsAdd );
  // Удаляем карточки
  userElement.querySelector('.elements__btn_action_del').addEventListener('click', deleteCardsFunc);
  // отображаем на странице
  usersOnline.prepend(userElement); 
 };
//_________________________________________________________________________________________________________

// Функция отправки формы с данными карты
function formAddtHandler(evt) {
  evt.preventDefault();
  addCardsElement (inputLinkCards.value, imputTitleCards.value);
  closedPopupCard ();
}
// Слушатель на форму для добавления картинок и подписи
  formCards.addEventListener('submit', formAddtHandler);




// // Открываем попап с картинкой
// //__________________________________________________
//  const popupClosCards = document.querySelector('.popup_content_image');
//  const imageCardsmage = document.querySelector('.popup__image');
//  const imagePopup = document.querySelector('.template-container');
//  const buttnClosePopupCards = document.querySelector('.popup__close-icon_close_image');
//  const figcaption = document.querySelector('.popup__image-caption');

//  function openedPopupC (evt) {
//    popupClosCards.classList.add('popup_opened');
//    imageCardsmage.src = evt.target.src;
//    imageCardsmage.alt = evt.target.alt;
//    figcaption.textContent = evt.target.alt;
// }
// //Функция для закрытия попапа
// function closePop () {
//  popupClosCards.classList.remove('popup_opened');

// }
// // Слушатель для открытия попапа с данными в форме 
// imagePopup.addEventListener('click', openedPopupC);
  
// // Слушатель для закрытия попапа с данными в форме Закрытие попапа
// buttnClosePopupCards.addEventListener('click', closePop);

