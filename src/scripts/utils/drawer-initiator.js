const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show-nav-item');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    if (!event.target.matches('hamburger')) {
      if (drawer.classList.contains('show-nav-item')) {
        drawer.classList.remove('show-nav-item');
        event.stopPropagation();
      }
    }
  },
};

export default DrawerInitiator;
