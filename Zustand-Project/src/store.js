import {create} from 'zustand'

const useStore=create((set)=>({
    posts:[],
    loading:false,
    error:null,

    fetchPosts:async()=>{
        set({loading:true,error:null})

        try {
            const res=await fetch('https://jsonplaceholder.typicode.com/posts');
            const data=await res.json();
            set({posts:data,loading:false})
        } catch (error) {
            set({loading:false,error:"Failed to fetch"})
        }
    }
}))

export default useStore;