 // Объект элементтов
 const config = {
  formSelector: '.popup__form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_btn_notactive',
  inputErrorClass: 'form__field_error_active',
  errorClass: 'form__field-error_status_error'
};

// Перебор всех форм
function enableValidation ({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
};


  // Добавление полей ошибок всем полям создаем объект из полей ввода проходимся по ним и вешаем  слушателей
function setEventListeners (formElement, { inputSelector, ...rest }) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement, rest);
        toggleButtonState(formElement, rest);
      });
    });
};


    // функция добавления ошибки
function showInputError (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};
  // функция удаления ошибки
function hideInputError (formElement, inputElement, { inputErrorClass, errorClass }) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};
  // Проверка на валидность
function isValid (formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}; 
  
// Функция убираем ошибки при открытии попапов
function hideInputSelectorError(formElement, { inputSelector, ...rest} ) {
  const inputList = formElement.querySelectorAll(inputSelector);
  inputList.forEach(function (inputElement) {
    hideInputError (formElement, inputElement, rest);
  });
}

// Функция делаем  кнопку не активной или активной 
function toggleButtonState(formElement, { submitButtonSelector, inactiveButtonClass }) {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  const formValid = formElement.checkValidity(); 

  if (!formValid) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

enableValidation(config);