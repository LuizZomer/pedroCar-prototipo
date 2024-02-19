import React, { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

interface ProductState {
 product: Product | null;
 setProduct: Dispatch<SetStateAction<Product | null>>;
}

interface Product {
 id: number;
 name: string;
 categoria: string;
 descricao: string;
 createdAt: string;
}

interface ProductContextProps {
 children: ReactNode;
}

const ProductContext = createContext<ProductState>({} as ProductState);

const ProductProvider: React.FC<ProductContextProps> = ({ children }) => {
 const [product, setProduct] = useState<Product | null>(null);

 const contextValue: ProductState = {
    product,
    setProduct,
 };

 return (
    <ProductContext.Provider value={ contextValue }>
      {children}
    </ProductContext.Provider>
 );
};

export { ProductProvider, ProductContext };