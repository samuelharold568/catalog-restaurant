import './item-card';

class ItemList extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
    `;
    this._item.forEach((item) => {
      const itemElement = document.createElement('item-card');
      itemElement.item = item;
      this.appendChild(itemElement);
    });
    this.classList.add('container-item-article');
  }
}

customElements.define('list-item', ItemList);
