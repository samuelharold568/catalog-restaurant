import API_ENDPOINT from '../globals/api-endpoint';

class RestourantSource {
  static async listRestourant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTOURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestourant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTOURANT(id));
    return response.json();
  }

  static async imageSmallSize(id) {
    const response = await fetch(API_ENDPOINT.IMAGE_SMALL_SIZE(id));
    return response;
  }

  static async imageMediumSize(id) {
    const response = await fetch(API_ENDPOINT.IMAGE_MEDIUM_SIZE(id));
    return response;
  }
}

export default RestourantSource;
