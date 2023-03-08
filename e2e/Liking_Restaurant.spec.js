const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', async ({ I }) => {
  await I.waitForElement('#favoriteIsEmpty', 5);
  I.see('not favorite item', '#favoriteIsEmpty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('not favorite item', '#favoriteIsEmpty');
  I.amOnPage('/#/restourant');

  await I.waitForElement('.btn-detail a', 5);
  await I.waitForElement('.card-title', 5);

  const firstRestaurant = locate('.card-title').first();
  const btnFirstRestaurant = locate('.btn-detail a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(btnFirstRestaurant);

  await I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  await I.waitForElement('.card-title', 5);

  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('not favorite item', '#favoriteIsEmpty');
  I.amOnPage('/#/restourant');

  await I.waitForElement('.btn-detail a', 5);
  await I.waitForElement('.card-title', 5);

  const firstRestaurant = locate('.card-title').first();
  const btnFirstRestaurant = locate('.btn-detail a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(btnFirstRestaurant);

  await I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  await I.waitForElement('.card-title', 5);

  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.btn-detail a');
  I.click('.btn-detail a');

  await I.waitForElement('.btn-liked', 5);
  I.click('.btn-liked');

  I.amOnPage('/#/favorite');

  await I.waitForElement('#favoriteIsEmpty', 5);
  I.see('not favorite item', '#favoriteIsEmpty');
 
});
