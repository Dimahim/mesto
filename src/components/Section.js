export default class Section {
  constructor ({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = selectorContainer
    
  };

  //отрисовка всех элементов  на странице
  initialCards() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  //принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._containerSelector.prepend(element);
  }


}