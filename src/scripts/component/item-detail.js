import CONFIG from '../globals/config';
import './food-detail';
import './drink-detail';
import './customer-review';

class ItemDetail extends HTMLElement {
  set details(detail) {
    this._details = detail;
    this.render();
  }

  render() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        h2, h3, h4, p {
          padding: 5px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight: lighter;
        }

        :host {
          width: 100%;
        }

        .food-container,
        .drink-container {
          background-color: #FCF9BE;
        }

        .resto-image {
          max-width: 800px;
          width: 100%;
          height: auto;
        }

        .description h3,
        .description h4 {
          color: #414040;
        }

        .description p {
          color: #6e6d6c;
        }

        .container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .description-container {
          display: flex;
          background-color: #E3DFFD;
          width: 100%;
        }

        .description {
          padding: 10px;
        }

        .title-detail {
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          font-size: 3rem;
          color: #537FE7;
        }

        .menu {
          display: flex;
          flex-direction: row;
          gap: 15px;
        }

        .review-container {
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: 768px) {
          .description-container {
            flex-direction: column;
            width: 100%;
          }

          .menu {
            flex-direction: column;
            width: 100%;
          }
        }

      </style> 
      <section class='container'>
        <h2 class="title-detail">${this._details.name}</h2>
        <div class="description-container">
          <img class="resto-image" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + this._details.pictureId}" alt="${this._details.name}" />
          <div class="description">
            <h3>${this._details.name}</h3>
            <p>${this._details.address} ${this._details.city}</p>
            <h4>Description :</h4>
            <p>${this._details.description}</p>
          </div>
        </div>
        <div class='menu'>
          <div class='food-container'>
            <h3>food's</h3>
            <ul id="food">

            </ul>
          </div>
          <div class='drink-container'>
            <h3>drink's</h3>
            <ul id="drink">
            
            </ul>
          </div>
        </div>
        <div class='review-container'>
          <h3>Customer reviews</h3>
          <ul id="review">
          </ul>
        </div>
      </section>
    `;

    const foodElement = document.createElement('food-detail');
    const drinkElement = document.createElement('drink-detail');
    const reviewElement = document.createElement('customer-review');
    const food = shadowRoot.querySelector('#food');
    const drink = shadowRoot.querySelector('#drink');
    const review = shadowRoot.querySelector('#review');
    foodElement.foods = this._details.menus.foods;
    drinkElement.drinks = this._details.menus.drinks;
    reviewElement.reviews = this._details.customerReviews;
    food.appendChild(foodElement);
    drink.appendChild(drinkElement);
    review.appendChild(reviewElement);
  }
}

customElements.define('item-detail', ItemDetail);
