// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      return { ...state, favorites: action.payload };
    }
    default: {
      return state;
    }
  }
}
