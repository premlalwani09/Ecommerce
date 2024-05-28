import { useEffect, useState } from "react";
import "/src/Ecommerce/ecommerce.css"
import { useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Product(){

    const [products , setProducts] = useState([]);
    const navigate = useNavigate();
    const [cartCounter , setCartCounter] = useState(0);

    // const Products = [];
    // function setProducts(s){
    //     Products = x;
    // }

    // USEEFFECT : Runs a code maximum once / runs a code at a specified time / specififed event 

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setProducts(result);
        });
    }, []);

    


    function handleProductClick(product){
        navigate('product/'+product.id);   
    }

    function handleAddToCart(event){
        event.stopPropagation();
        setCartCounter(cartCounter+1);
    }

    return (
        <>
            <main>
                <nav>
                    <div className="nav-cart">
                        <p><strong>Cart</strong><FontAwesomeIcon icon={faCartShopping} />&nbsp;<span className="cart-count">{cartCounter}</span></p>
                    </div>
                </nav>
                <h1>Products</h1>
                <div className="products">
                    {
                        products.map((product , index) => {
                            return (
                            <>
                                <div key={index} className="product" onClick={() => handleProductClick(product)}>
                                    <img src={product.image}></img>
                                    <h3>{product.title}</h3>
                                    <button onClick={handleAddToCart}>Add to Cart</button>
                                </div>
                            </>
                            
                        )})
                    }
                </div>
            </main>

        </>
    )
}

export default Product;