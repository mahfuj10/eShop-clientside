import UseAuth from "./UseAuth"
import Swal from 'sweetalert2'

const AddToWishdom = () => {

    const { user } = UseAuth();

    const handaleAddToWishdom = (product) => {

        product.email = user.email
        fetch(`https://fathomless-sierra-85288.herokuapp.com/addToWishdom`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json(product))
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    text: 'This product added on wishdom',
                })
            })
    }

    return {
        handaleAddToWishdom
    }
}

export default AddToWishdom;