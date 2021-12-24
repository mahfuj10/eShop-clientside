import { useEffect, useState } from "react";

const ShopProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-sierra-85288.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return {
        products
    }
}

export default ShopProducts;