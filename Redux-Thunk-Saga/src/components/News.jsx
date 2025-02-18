import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { fetchNews } from "../redux/newsAction";

const News=()=>{
    const dispatch=useDispatch();
    const {news,isLoading,error}=useSelector((state)=>state)

    useEffect(()=>{
        dispatch(fetchNews());
    },[dispatch])

    return(
        <div>
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {
                news && (
                    <div>
                        {news.map((article,index)=>(
                            <div key={index}>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default News;