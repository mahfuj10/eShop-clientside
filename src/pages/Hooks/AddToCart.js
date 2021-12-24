import UseAuth from "./UseAuth";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";



const AddToCart = () => {

    const { user } = UseAuth();
    const [loading, setLoading] = useState(true);
    const [cartroducts, setCartProducts] = useState([]);
    https://fathomless-sierra-85288.herokuapp.com/
    useEffect(() => {
        fetch(`   https://fathomless-sierra-85288.herokuapp.com/cartProduct/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setCartProducts(data);

            });
    }, [cartroducts])

    const handaleAddToCart = (product) => {

        product.email = user.email
        fetch(`   https://fathomless-sierra-85288.herokuapp.com/addToCart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json(product))
            .then(data => {
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    text: 'Added on my cart',
                })
            })
    }

    const handaleDelete = id => {
        fetch(`https://fathomless-sierra-85288.herokuapp.com/cartProduct/${id}`, {
            method: "DELETE",
        })
            .then()
            .then(data => {
                if (data.deleteCount > 0) {
                    setLoading(false);
                    const remainingProduct = cartroducts.filter(product => product._id !== id);
                    setCartProducts(remainingProduct);

                }
            })
    }

    return {
        loading,
        handaleDelete,
        handaleAddToCart,
        cartroducts
    }
};

export default AddToCart;