import { useState } from "react";
import { useEffect } from "react";
import UseAuth from "./UseAuth";

const Cart_Wishdom_Products = () => {

    const [wishdomProducts, setWishdomProducts] = useState([]);
    const { user } = UseAuth();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://fathomless-sierra-85288.herokuapp.com/myWishdom/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setWishdomProducts(data)
            })
    }, [loading, wishdomProducts]);

    const handaleDeleteProduct = (id) => {

        fetch(`https://fathomless-sierra-85288.herokuapp.com/myWishdom/${id}`, {
            method: "DELETE",
        })
            .then()
            .then(data => {
                if (data.deleteCount > 0) {
                    const remainingProduct = wishdomProducts.filter(product => product._id !== id);
                    setWishdomProducts(remainingProduct);
                    setLoading(false);

                }
            })
    }

    return {
        loading,
        wishdomProducts,
        handaleDeleteProduct
    }

};

export default Cart_Wishdom_Products;