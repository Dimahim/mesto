 // Объект элементтов
 const config = {
  formSelector: '.popup__form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_btn_notactive',
  inputErrorClass: 'form__field_error_active',
  errorClass: 'form__field-error_status_error'
};


    // функция добавления ошибки
function showInputError (formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
};
  // функция удаления ошибки
function hideInputError (formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
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
function hideInputSelectorError(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  inputList.forEach(function (inputElement) {
    hideInputError (formElement, inputElement, config);
  });
}


function toggleButtonState(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  const formValid = formElement.checkValidity(); 

  if (!formValid) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}


  // Добавление полей ошибок всем полям создаем объект из полей ввода проходимся по ним и вешаем  слушателей
function setEventListeners (formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement, config);
        toggleButtonState(formElement, config);
      });
    });
};

// Перебор всех форм
function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

    
enableValidation(config);