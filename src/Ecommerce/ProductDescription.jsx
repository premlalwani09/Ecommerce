import { useEffect, useState } from "react";
import "/src/Ecommerce/ecommerce.css"
import { useParams } from "react-router-dom";

function ProductDescription(){

    const { id } = useParams();
    const [singleproducts , setSingleProducts] = useState([]);

    // const Products = [];
    // function setProducts(s){
    //     Products = x;
    // }

    // USEEFFECT : Runs a code maximum once / runs a code at a specified time / specififed event 

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setSingleProducts(result);
        });
    }, [id]);


    return (
        <>
            <main>
                <h1>Product</h1>
                <div className="singleproduct">
                    <img src={singleproducts.image} alt={singleproducts.title}></img>
                    <h3>{singleproducts.title}</h3>
                    <p>{singleproducts.description}</p>
                    <p>Price : {singleproducts.price}</p>
                    <a href="">Add to Cart</a>
                </div>
            </main>

        </>
    )
}

export default ProductDescription;