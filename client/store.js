import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

const SELECT_FOLDER = 'SELECT_FOLDER';
const SELECT_MAIL = 'SELECT_MAIL';

const initialState = {
  selectedFolder: null,
  selectedMail: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FOLDER:
      return {...state, selectedFolder: action.folder};
    case SELECT_MAIL:
      return {...state, selectedMail: action.mail};
    default:
      return state;
  }
};

export const selectFolder = (folder) => ({
  type: SELECT_FOLDER,
  folder
})

export const selectMail = (mail) => ({
  type: SELECT_MAIL,
  mail
})

const store = createStore(
  reducer,
  applyMiddleware(
    createLogger({collapsed: true})
  )
);

export default store;
