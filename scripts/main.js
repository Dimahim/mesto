let openPopup = document.querySelector('.profile__edit-button');
let profTitle = document.querySelector('.profile__title');
let profSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.form__field_item_name');
let jobInput = document.querySelector('.form__field_item_job');
let formElement = document.querySelector('.form')

// Функция для открытия попапа 
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
 
