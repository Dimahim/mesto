let openPopup = document.querySelector('.profile__edit-button');
let profTitle = document.querySelector('.profile__title');
let profSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.form__field_item_name');
let jobInput = document.querySelector('.form__field_item_job');
let formElement = document.querySelector('.form');
// переменные для попапа добавление карточек

let popupAddCards = document.querySelector('.popup_container_cards');
let addCards = document.querySelector('.profile__add-button');
let makeCards = document.querySelector('.form__button_add_cards');
let closePopupCards = document.querySelector('.popup__close-icon_close_cards');
let formCards = document.querySelector('.popup__form_add_cards');

//let elementsContainer = document.querySelectorAll('.elements');
let popupFormaAddCards = document.querySelector('.form__button_add_cards');
let imputTitleCards = document.querySelector('.form__field_item_title');
let inputLinkCards = document.querySelector('.form__field_item_link');


// Функция для открытия попапа редактированиие профиля
function openedPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
}
// Функция для закрытия попапа
function closePopupIcon (){
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
 

//_____________________________________________________
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


////////////////////////////////////////////////////////////// ___________добавление карточек___________________________________

 const usersOnline = document.querySelector('.elements');


// function addCardsElement(inputLinkCards, imputTitleCards) {
// // берем шаблон тега template
//   const userTemplate = document.querySelector('.elements__card').content;


// // клонируем содержимое тега template
//   const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);

// // наполняем содержимым
//   userElement.querySelector('.elements__image').src = inputLinkCards;
//   userElement.querySelector('.elements__text').textContent = imputTitleCards;
// // ставим лайк
//   const elementLike = document.querySelector('.elements__group');
//   elementLike.addEventListener('click', function (evt) {
//     evt.target.classList.toggle('elements__group_like_active');
//   });
//   // отображаем на странице
//   usersOnline.prepend(userElement); 
// };

// // функция добавление  картинок и подписи через форму.

// const linkCard = document.querySelector('.elements__image');
// const titleCard = document.querySelector('.elements__text');

// function formAddtHandler(evt) {
//   evt.preventDefault();
//   linkCard.src = inputLinkCards.value;
//   titleCard.textContent = imputTitleCards.value;
//   addCardsElement (inputLinkCards.value, imputTitleCards.value);
//   closedPopupCard ();
// }
// // Слушатель на форму для добавления картинок и подписи
// formCards.addEventListener('submit', formAddtHandler);

// cоздаем массив
const directors = [
  {
    image: './images/kirill-pershin-1088404.jpg',
    alt: 'Карачаево-Черкесия',
    name: 'Карачаево-Черкесия'
    
  },
  {
    image: './images/kirill-pershin-1404681-unsplash.png',
    alt: 'Эльбрус',
    name: 'Гора Эльбрус'
    
  },
  {
    image: './images/kirill-pershin-1556355-unsplash.jpg',
    alt: 'Домбай',
    name: 'Домбай'
    
  },
  {
    image: './images/photo-grid-baikal-2.jpg',
    alt: 'Байкал',
    name: 'Байкал'
    
  },
  {
    image: './images/photo-grid-sochi.jpg',
    alt: 'Сочи',
    name: 'Сочи'
    
  },
  {
    image: './images/place-karelia.jpg',
    alt: 'Карелия',
    name: 'Карелия'
    
  },
];

// Дефолтное создане карточек
  directors.forEach(function (element) {
    const userTemplate = document.querySelector('.elements__card').content;
    const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
    
  
    userElement.querySelector('.elements__image').src = element.image;
    userElement.querySelector('.elements__image').alt = element.alt;
    userElement.querySelector('.elements__text').textContent = element.name;
  
    usersOnline.append(userElement);
  });

  // Добавление карточек 

  

  
  
