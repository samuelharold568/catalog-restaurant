import RestourantSource from '../../Data/get-data';
import '../../component/list-item';

const Home = {
  async render() {
    return `
      <h3 class="title-article">Top Restaurant</h3>
      <list-item></list-item>
      <p class="btn-view-all" tabindex="0" tabindex="0"><a href="/#/restourant">View all..</a></p>
    `;
  },

  async afterRender() {
    const data = await RestourantSource.listRestourant();
    const listElement = document.querySelector('list-item');

    const topRatingRestaurant = data.filter((obj) => obj.rating > 4.7);
    const arr = [];

    if (arr.length === 3) {
      arr.push(topRatingRestaurant);
    }

    listElement.item = topRatingRestaurant;
  },
};

export default Home;
