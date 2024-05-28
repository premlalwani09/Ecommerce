import { useEffect, useState } from "react";
import "/src/Ecommerce/ecommerce.css"
import { useParams } from "react-router-dom";

function BlogDescription(){

    const { id } = useParams();
    const [singleBlog , setSingleBlog] = useState([]);

    // const Products = [];
    // function setProducts(s){
    //     Products = x;
    // }

    // USEEFFECT : Runs a code maximum once / runs a code at a specified time / specififed event 

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((response) => response.json())
        .then((resultblog) => {
            console.log(resultblog);
            setSingleBlog(resultblog);
        });

    }, [id]);


    return (
        <>
            <main>
                <h1>Blog</h1>
                <div className="singleBlog">
                    <h3>{singleBlog.title}</h3>
                    <p>{singleBlog.body}</p>
                </div>
            </main>

        </>
    )
}

export default BlogDescription;