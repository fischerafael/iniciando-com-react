import React, { useState } from "react";

interface IProduct {
  id: string;
  name: string;
  price: number;
}

const INITIAL_STATE: IProduct = {
  name: "",
  price: 0,
  id: "",
};

const ProductManagement = () => {
  const [product, setProduct] = useState<IProduct>(INITIAL_STATE);
  const [products, setProducts] = useState<IProduct[]>([]);

  const isDisabled = product.name === "" || product.price === 0;
  const cheapestProduct = findCheapest(products);

  const handleAddProduct = () => {
    const newProduct = {
      ...product,
      id: new Date().toString(),
    };
    setProducts((state) => [...state, newProduct]);
    setProduct(() => INITIAL_STATE);
  };

  const handleRemoveProduct = (productId: string) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(() => updatedProducts);
  };

  console.log("products", products);

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={product.name}
        onChange={(e) =>
          setProduct((state) => ({ ...state, name: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Preço do Produto"
        value={product.price}
        onChange={(e) =>
          setProduct((state) => ({ ...state, price: Number(e.target.value) }))
        }
      />
      <button disabled={isDisabled} onClick={handleAddProduct}>
        Add Product
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => handleRemoveProduct(product.id)}>
              Remover Produto
            </button>
          </li>
        ))}
      </ul>
      <div>
        <p>O produto mais barato é:</p>

        <div>
          <p>{cheapestProduct?.name}</p>
          <p>{cheapestProduct?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;

const findCheapest = (products: IProduct[]): IProduct => {
  let cheapest: IProduct = products[0];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price < cheapest.price) {
      cheapest = products[i];
    }
  }

  return cheapest;
};
