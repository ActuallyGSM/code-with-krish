import axios from "axios";

// interface Order {
//     id: number;
//     product: string;
//     quantity: number;
//     price: number;
// }

export const createCustomerAccount = async (order: any) => {
    try {
        const response = await axios.post('http://localhost:3002/customer', order);
        return response.data;
    } catch (error) {
        console.error('Error while creating order', error);
    }
}

