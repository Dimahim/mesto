
// Класс для создания карточек
export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  // получаем карточку
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);

    return cardElement;
  }
// наполняем карточку данными, передаем этот метод для отрисовки карточки на странице
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    

    this._newImageElement = this._element.querySelector('.elements__image');
    this._newTextElement = this._element.querySelector('.elements__text');
    this._newImageElement.src = this._link;
    this._newImageElement.alt = this._name;
    this._newTextElement.textContent = this._name;
    
    
    
    return this._element;
  }
  // метод добавление лайка
  _toggleLikeCard() {
    const elementLike = this._element.querySelector('.elements__group')
    elementLike.classList.toggle('elements__group_like_active');
  };
  
  // метод удаление карточки
  _deleteCard() {
    this._element.remove();
  };

   // Добавляем обработчики  на лайк и удаление карточки
  _setEventListeners() {
    // лайк
    this._element.querySelector('.elements__group').addEventListener('click', () => this._toggleLikeCard());
    // Удаление карточки
    this._element.querySelector('.elements__btn_action_del').addEventListener('click', () => this._deleteCard());
    // Открытие попапа просмотра картинок 
    this._element.querySelector('.elements__image').addEventListener('click', () => this._handleCardClick(this._link, this._name));
  };
};

