class CustomerReview extends HTMLElement {
  set reviews(review) {
    this._reviews = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .review-list {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          padding: 10px;  
        }

        .review-list li {
          list-style: none;
          padding: 15px; 
          background-color: #E3DFFD;
          border-radius: 15px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight: lighter;
          min-width: 150px;
        }

        .review-list li p {
          color: #6e6d6c;
        }
      </style>
    `;
    this._reviews.forEach((item) => {
      const foodItemElement = document.createElement('li');
      foodItemElement.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.review}</p>
        <p>${item.date}</p>
      `;
      this.appendChild(foodItemElement);
    });

    this.classList.add('review-list');
  }
}

customElements.define('customer-review', CustomerReview);
