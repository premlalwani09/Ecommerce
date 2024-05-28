import { useEffect , useState } from "react";
import "/src/Ecommerce/ecommerce.css"
import { useNavigate } from "react-router-dom";

function Blog(){

    const [blogs , setBlogs] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((resultblog) => {
            console.log(resultblog);
            setBlogs(resultblog);
        });

    }, []);

    function handleBlogClick(blog){
        navigate('blog/'+blog.id);   
    }

    return (
        <>
            <main>
                <h1>Blogs</h1>
                <div className="blogs">
                    {
                        blogs.map((blog , index) => {
                            return (
                            <>
                                <div key={index} className="blog" onClick={() => handleBlogClick(blog)}>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.body}</p>
                                </div>
                            </>
                            
                        )})
                    }
                </div>
            </main>


        </>
    ) 
}

export default Blog;