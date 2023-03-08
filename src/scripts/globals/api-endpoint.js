import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTOURANT: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTOURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  IMAGE_SMALL_SIZE: (id) => `${CONFIG.BASE_IMAGE_SMALL_URL}${id}`,
  IMAGE_MEDIUM_SIZE: (id) => `${CONFIG.BASE_IMAGE_MEDIUM_URL}${id}`,
};

export default API_ENDPOINT;
