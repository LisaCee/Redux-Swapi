// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based
import axios from 'axios';

export const GET_CHARS = 'GET_CHARS'
export const ERROR =  'ERROR'


export const getCharacters = () => {
    const request = axios.get(`https://swapi.co/api/people/`)
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: GET_CHARS, payload: data })
        })
        .catch(err => {
            dispatch({ type: ERROR, error: console.log(err) })
        });

    };
};
