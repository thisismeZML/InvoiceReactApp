import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const CreationForm = ({ products, addProduct }) => {
  const selectRef = useRef();
  const quantityRef = useRef();
  const formRef = useRef();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const productId = parseInt(selectRef.current.value);
    const quantity = parseInt(quantityRef.current.value);

    if (isNaN(productId) || isNaN(quantity)) {
      // Handle invalid input
      toast.error("Please enter valid product and quantity.", {
        duration: 2000,
      });
      return;
    }

    const currentProduct = products.find((product) => product.id === productId);
    if (!currentProduct) {
      // Handle case where selected product doesn't exist
      toast.error("Selected product not found.");
      return;
    }

    const id = Date.now();
    const cost = (quantity * currentProduct.price).toFixed(2);

    if (quantity > currentProduct.stock) {
      toast("🥺 We have only " + currentProduct.stock + " units available.");
      return;
    }

    const newItem = {
      id,
      product: currentProduct,
      quantity,
      cost,
    };

    if (productId && quantity) {
      toast.success('Successfully Added', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
        duration : 2000,
      });
      addProduct(newItem);
      formRef.current.reset();
    } else {
      toast.error("Please select a product and enter quantity.");
    }
  };

  return (
    <>
      <form onSubmit={handleAddProduct} ref={formRef} action="">
        <div className="grid grid-cols-5 items-center gap-4">
          <div className="max-w-md col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Products" />
            </div>
            <Select ref={selectRef} id="countries" required>
              <option>Choose Product</option>
              {products.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </div>
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Quantity" />
            </div>
            <TextInput ref={quantityRef} id="base" type="text" sizing="md" />
          </div>
          <Button
            type="submit"
            className="col-span-1 w-full h-full flex items-center justify-center"
            color="blue"
          >
            Buy
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreationForm;
