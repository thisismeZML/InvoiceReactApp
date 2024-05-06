import { Button, Drawer, Label, TextInput } from "flowbite-react";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const Slider = ({ isOpen, handleClose, addProductInven, products }) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();
  const handleInven = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const stock = stockRef.current.value;
    const newProduct = {
      id: Date.now(),
      name,
      price,
      stock,
    };
    if (!isNaN(name)) {
      toast.error("Name cannot be a number");
      return;
    }
    if (name && price && stock) {
      toast.success("Successfully Added");
      addProductInven(newProduct);
    } else {
      toast.error("You can't left input empty");
    }
  };
  return (
    <Drawer
      className="w-[350px]"
      open={isOpen}
      onClose={handleClose}
      position="right"
    >
      <Drawer.Header title="Your Products" />
      <Drawer.Items>
        <div className="flex flex-col h-[910px] gap-5">
          <div className="header flex flex-col gap-3 mt-5 overflow-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border p-3"
              >
                <p>
                  {product.name}{" "}
                  <span className="font-mono">({product.stock})</span>
                </p>
                <p className="font-mono">${product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <p className="text-zinc-400">Add Product</p>
            <form action="" onSubmit={handleInven}>
              <div className="grid grid-cols-3 gap-3">
                <div className=" col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="Product Name" />
                  </div>
                  <TextInput ref={nameRef} id="base" type="text" sizing="md" />
                </div>
                <div className=" col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="Price" />
                  </div>
                  <TextInput ref={priceRef} id="base" type="text" sizing="md" />
                </div>
                <div className=" col-span-1">
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="Stock" />
                  </div>
                  <TextInput ref={stockRef} id="base" type="text" sizing="md" />
                </div>
                <Button type="submit" color="blue" className=" col-span-3">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};

export default Slider;
