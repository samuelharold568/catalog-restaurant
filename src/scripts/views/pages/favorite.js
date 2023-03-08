import FavoriteRestaurantIdb from '../../Data/favorite-restaurant-idb';
import '../../component/list-item';

const Favorite = {
  async render() {
    return `
      <h2 class="title-article">Favorite Restaurant</h2>
      <h3 id="favoriteIsEmpty" class="favoriteEmpty restaurant-item_not_found"></h3>
      <list-item></list-item>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurant();
    const listElement = document.querySelector('list-item');
    console.log('ini data', typeof data, data);
    const favoriteIsEmpty = document.getElementById('favoriteIsEmpty');

    if (data.length === 0) {
      favoriteIsEmpty.innerText = 'not favorite item';
    }
    listElement.item = data;
  },
};

export default Favorite;
