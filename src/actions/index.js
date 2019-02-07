import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action Creator with thunk middleware
// A function returns another function
export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
  
    dispatch({type: 'FETCH_POSTS',payload: response.data});
  }
};
