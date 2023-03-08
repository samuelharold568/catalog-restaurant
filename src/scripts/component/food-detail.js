class FoodDetail extends HTMLElement {
  set foods(food) {
    this._foods = food;
    console.log('ini clubs', this._foods);
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .food-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          padding: 10px;
        }

        .food-list li {
          background-color: red;
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
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('li');
      foodItemElement.innerText = `${food.name}`;
      this.appendChild(foodItemElement);
    });

    this.classList.add('food-list');
  }
}

customElements.define('food-detail', FoodDetail);
