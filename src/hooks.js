import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useToggleFlip = (initialFlipState = true) => {
    const [isFlipped, setFlipped] = useState(initialFlipState);

    const flipCard = () => {
        setFlipped(isFlipped => !isFlipped);
    };

    return [isFlipped, flipCard];
};

const useAxios = (baseURL) => {
    const [res, setRes] = useState([])

    const addData = async (endpoint) => {
        try {
            const response = await axios.get(baseURL + endpoint);
            setRes(data => [...data, {...response.data, id: uuid() }]);
        } catch (e) {
        console.log(e)
        }
    };

    return [res, addData]
};

export { useToggleFlip, useAxios };