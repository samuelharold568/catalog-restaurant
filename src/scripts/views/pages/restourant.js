import RestourantSource from '../../Data/get-data';
import '../../component/list-item';

const Restourant = {
  async render() {
    return `
    <h3 class="title-article">Our Restaurant</h3>
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
