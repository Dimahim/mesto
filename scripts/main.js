let openPopup = document.querySelector('.profile__edit-button');
let profTitle = document.querySelector('.profile__title');
let profSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.form__user');
let jobInput = document.querySelector('.form__job');
let formButton = document.querySelector('.popup__button');
// Слушатель для открытия попапа с данными в форме 
openPopup.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
})
// Закрытие попапа
closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
})
// Функция для изменения донных в профиле из формы и зякрытие попапа evt.preventDefault() отменяет стандартную отправку формы 
function formSubmitHandler (evt) {
  evt.preventDefault();
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}
// нажимаем на кнопку сохранить в форме.
formButton.addEventListener('click', formSubmitHandler);
