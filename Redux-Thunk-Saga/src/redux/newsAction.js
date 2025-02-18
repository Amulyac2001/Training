export const FETCH_NEWS_REQUEST='FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS='FETCH_NEWS_SUCCESS'; 
export const FETCH_NEWS_FAILURE='FETCH_NEWS_FAILURE';

// action creator:->

export const fetchNewsRequest=()=>{
    return{
        type:FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess=(news)=>{
    return{
        type:FETCH_NEWS_SUCCESS,
        payload:news
    }
}

export const fetchNewsFailure=(error)=>{
    return{
        type:FETCH_NEWS_FAILURE,
        payload:error
    }
}

export const fetchNews=()=>{
    return (dispatch)=>{
        dispatch(fetchNewsRequest());
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-01-18&sortBy=publishedAt&apiKey=346c1ac8dc33419aaa7d5cf04d80739a')
        .then((res)=>res.json())
        .then((data)=>{
            const news=data.articles.map((article)=>{
                return {
                    title:article.title,
                    description:article.description
                }
            })
            dispatch(fetchNewsSuccess(news))
        })
        .catch((error)=>{
            dispatch(fetchNewsFailure(error))
        })
    }
}