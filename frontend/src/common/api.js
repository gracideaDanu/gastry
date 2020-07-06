import axios from "axios";

// constants
const url = "http://localhost:4000";

const placeOrder = async (data) => {
    try {
        const res = await axios.post(`${url}/order/addOrder`, data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export default {
    order: {
        placeOrder: (data) => placeOrder(data)
    }
}