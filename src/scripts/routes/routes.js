import Restourant from '../views/pages/restourant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/restourant': Restourant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
