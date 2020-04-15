import { SEARCH_REVIEW } from '../constants'
import axios from 'axios'

export const searchReview = (search_values) => dispatch => {
    console.log('from search action...')
    let search_object = {}
    for( let search_field in search_values ){
        if(Array.isArray(search_values[search_field])){
            if(search_values[search_field].length !== 0){
                console.log(search_field,' ',search_values[search_field])
                search_object[search_field] = search_values[search_field]
            }
        }else{
            if(search_values[search_field] !== ''){
                console.log(search_field,' ',search_values[search_field])
                search_object[search_field] = search_values[search_field]
            }

        }
    }
    console.log('search object ',search_object)
    let search_query = '?';
        for(let query in search_object){
            if(Array.isArray(search_object[query])){
                if(query === 'rvTag'){
                    console.log('array ',query,' ',search_object[query])
                    for(let tag in search_object[query]){
                        search_query += '&'.concat(query+'='+encodeURIComponent(search_object[query][tag]))
                    }                 
                }else{
                    console.log('array ',query,' ',search_object[query])
                    for(let element in search_object[query]){
                        search_query += '&'.concat(query+'='+search_object[query][element])
                    }
                }
                
            }else{
                console.log(query,' ',search_object[query])
                search_query += '&'.concat(query+'='+search_object[query])
            }
        }
    console.log('search query ',search_query) 
    
    axios.get(`/search/review${search_query}`)
    .then(res => dispatch({
        type: SEARCH_REVIEW,
        payload: res.data,
        query: search_query
    }))
    .catch(err => console.log(err)) 
}

export const getSearchFormQuery = query => dispatch => {
    axios.get(`/search/review${query}`)
    .then(res => dispatch({
        type: SEARCH_REVIEW,
        payload: res.data,
        query: query
    }))
    .catch(err => console.log(err)) 
    
}