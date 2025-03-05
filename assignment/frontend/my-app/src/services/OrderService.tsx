import axios from "axios";

// interface Order {
//     id: number;
//     product: string;
//     quantity: number;
//     price: number;
// }

export const createOrder = async (order: any) => {
    try {
        const response = await axios.post('http://localhost:3001/orders', order);
        return response.data;
    } catch (error) {
        console.error('Error while creating order', error);
    }
}

