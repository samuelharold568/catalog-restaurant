import CONFIG from '../globals/config';

class ItemCard extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        section {
          position: relative;
          background-color: #E3DFFD;
        }

        .responsive-image {
          max-width: 400px; 
          width: 100%;
          height: auto;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 2px;
          position: absolute;
          font-size: 20px;
          top: 0;
          right: 0;
          width: 70px;
          background-color: #FFFFD0;
        }

        .card-section a {
          padding: 15px;
        }

        .btn-detail {
          text-align: end;
        }

      </style>
      <section class="card-section">
        <img class="lazyload responsive-image" tabindex="0" data-src=${!this._item.image ? CONFIG.BASE_IMAGE_SMALL_URL + this._item.pictureId : this._item.image} alt=${this._item.name}/>
        <h4 class="card-title" tabindex="0">${this._item.name}</h4>
        <p class="rating" tabindex="0">&#11088 <span>${this._item.rating}</span></p>
        <p>${this._item.city}</p>
        <p class="btn-detail" tabindex="0"><a href="/#/detail/${this._item.id}">read more..</a></p>
      </section>
    `;
  }
}

customElements.define('item-card', ItemCard);
