import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const IndexContext = createContext();

export default function IndexContextProvider({children}) {
    const [loading, setLoading] = useState(false); 
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchBlogPosts(page = 1, tag=null, category=null) {
        setLoading(true);
        let url = `${process.env.REACT_APP_API_URL}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }
        
        try {
            const result = await fetch(url);
            
            const data = await result.json();
            
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages);
            
        } catch (error) {
            console.log("Error in fetching Data", error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        } 
        setLoading(false);
    }

    function handlePageChange(page){
        navigate( {search : `?page=${page}`});
        setPage(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return (<IndexContext.Provider value={value}>
        {children}
    </IndexContext.Provider>);
}
