import { ProductType } from "@/components/Product";
import { createContext, useState, ReactNode, useContext } from "react";

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValues {
  productsSelected: ProductType[];
  setProductsSelected: React.Dispatch<React.SetStateAction<ProductType[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialProductsSelected: ProductType[] = [];

const AppContext = createContext<AppContextValues | undefined>(undefined);

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [productsSelected, setProductsSelected] = useState(initialProductsSelected);
  const [isOpen, setIsOpen] = useState(false);

  const values: AppContextValues = {
    productsSelected,
    setProductsSelected,
    isOpen,
    setIsOpen,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };