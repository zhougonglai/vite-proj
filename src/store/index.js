import {createStore} from 'vuex';
import index from './module/index';

export default createStore({
  modules: {
    index
  }
});
