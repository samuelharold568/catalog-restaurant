class DrinkDetail extends HTMLElement {
  set drinks(drink) {
    this._drinks = drink;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .drink-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        padding: 10px;
      }

      .drink-list li {
        list-style: none;
        padding: 15px;
        color: #FFB100; 
        background-color: #FFF6F6;
        border-radius: 15px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: lighter;
      }
      </style>
    `;
    this._drinks.forEach((item) => {
      const drinksItemElement = document.createElement('li');
      drinksItemElement.innerText = `${item.name}`;
      this.appendChild(drinksItemElement);
    });

    this.classList.add('drink-list');
  }
}

customElements.define('drink-detail', DrinkDetail);
