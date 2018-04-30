import Loadable from 'react-loadable';
import Loading from './components/Loading';
import Navigation from './components/Navigation';

const homePath = './views/home/';
const dashboardPath = './views/dashboard/';
const errorPath = './views/errors/';
const musicPath = './views/music/';
const filmsPath = './views/films/';
const tvPath = './views/tvshows/';

// Home Views

export const Home = Loadable({
  loader: () => import(homePath + 'Home'),
  loading: () => Loading,
});

export const Register = Loadable({
  loader: () => import(homePath + 'Register'),
  loading: () => Loading,
});

export const Login = Loadable({
  loader: () => import(homePath + 'Login'),
  loading: () => Loading,
});

// Error Views

export const Error404 = Loadable({
  loader: () => import(errorPath + 'Error404'),
  loading: () => Loading,
});
