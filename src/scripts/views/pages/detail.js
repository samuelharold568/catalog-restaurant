import RestourantSource from '../../Data/get-data';
import UrlParser from '../../routes/url-parser';
import '../../component/item-detail';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import CONFIG from '../../globals/config';
import FavoriteRestaurantIdb from '../../Data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <item-detail></item-detail>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const btnContainer = document.getElementById('likeButtonContainer');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestourant = await RestourantSource.detailRestourant(url.id);
    const itemDetail = document.querySelector('item-detail');
    itemDetail.details = detailRestourant.restaurant;

    LikeButtonPresenter.init({
      likeButtonContainer: btnContainer,
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: detailRestourant.restaurant.id,
        name: detailRestourant.restaurant.name,
        city: detailRestourant.restaurant.city,
        rating: detailRestourant.restaurant.rating,
        image: `${CONFIG.BASE_IMAGE_SMALL_URL + detailRestourant.restaurant.pictureId}`,
      },
    });
  },
};

export default Detail;
