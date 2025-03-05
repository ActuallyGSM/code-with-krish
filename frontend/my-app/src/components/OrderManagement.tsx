import { create } from 'domain';
import React, { useEffect } from 'react';
import { createOrder } from '../services/OrderService';
import { FetchProducts } from '../services/ProductService';


function OrderManagement() {

    const [customerId, setCustomerId] = React.useState('');
    const [products, setProducts] = React.useState<{ id: number; name: string; price: number }[]>([]);
    const [productId, setProductId] = React.useState('');
    const [selectedProductId, setSelectedProductId] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [qty, setQty] = React.useState('');

    useEffect(() => {
        const session = localStorage.getItem('session');
        if (session) {
            const parsedSession = JSON.parse(session);
            setCustomerId(parsedSession.customerId);
        } else {
            console.log('No session found in local storage');
        }

        FetchProducts().then((response) => {
            setProducts(response);
        });
    }, []);

    const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        setSelectedProductId(selectedId);
        const selectedProduct = products.find((product) => product.id === parseInt(selectedId));
        if (selectedProduct) {
            setPrice(selectedProduct.price.toString());
            console.log('Selected product price:', selectedProduct.price);
        } else {
            console.log('Selected product not found');
        }
    };

    const handleOrderSubmit = async (e: any) => {
        try {
            e.preventDefault();
            console.log('Order Submitted');
            const order = {
                customerId,
                items: [
                    {
                        productId,
                        price,
                        quantity: qty,
                    },
                ],
            };

            const savedOrders = await createOrder(order);
            console.log('Order created', savedOrders);

        } catch (error) {
            console.error('Error while creating order', error);
        }

    }

    return (
        <>
            <p>Create Order</p>
            <form onSubmit={handleOrderSubmit}>
                <label>Customer ID:</label>
                <input type="text" id="customerId" name="customerId" value={customerId} readOnly />
                <br />
                <label>Product ID:</label>
                <select
                    id="productId"
                    name="productId"
                    value={selectedProductId}
                    onChange={handleProductChange}
                    required
                >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                        <option key={product.id} value={product.id}>
                            {product.name}
                        </option>
                    ))}
                </select>                <br />
                <label>Price:</label>
                <input type="text" id="price" name="price" value={price} readOnly />
                <br />
                <label>QTY:</label>
                <input type="text" id="qty" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default OrderManagement;