import RestourantSource from '../../Data/get-data';
import '../../component/list-item';

const Restourant = {
  async render() {
    return `
    <h2 class="title-article">Our Restaurant</h2>
    <list-item></list-item>
  `;
  },

  async afterRender() {
    const data = await RestourantSource.listRestourant();
    const listElement = document.querySelector('list-item');
    listElement.item = data;
  },
};

export default Restourant;
