import { createContext, useState } from "react";

const [productsSelected, setProductsSelected] = useState([]);
const [isOpen, setIsOpen] = useState(false);
const values = {
    productsSelected, setProductsSelected, isOpen, setIsOpen
}

export const appContext = createContext(values);