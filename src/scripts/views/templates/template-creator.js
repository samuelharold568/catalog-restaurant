const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="btn-like btn-unlike">
  &#10084;
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn-like btn-liked">
  &#10084;
  </button>
`;

export {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
