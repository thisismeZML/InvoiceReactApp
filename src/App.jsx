import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import SubHeader from "./components/SubHeader";
import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import CreationForm from "./components/CreationForm";
import Footer from "./components/Footer";
import { Button } from "flowbite-react";
import TableForm from "./components/TableForm";
import Slider from "./components/Slider";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(!isOpen);

  const [products, setProucts] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 19.99,
      stock: 100,
    },
    {
      id: 2,
      name: "Jeans",
      price: 29.99,
      stock: 80,
    },
    {
      id: 3,
      name: "Sneakers",
      price: 49.99,
      stock: 50,
    },
    {
      id: 4,
      name: "Backpack",
      price: 39.99,
      stock: 30,
    },
    {
      id: 5,
      name: "Watch",
      price: 99.99,
      stock: 20,
    },
  ]);
  const [items, setItems] = useState([]);

  const addProduct = (newItems) => {
    setItems([...items, newItems]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const quantity = item.quantity + amount; // Accessing item.quantity instead of items.quantity
          const cost = (quantity * item.product.price).toFixed(2);
          return { ...item, quantity, cost }; // Spread item instead of items
        }
        return item;
      })
    );
  };

  const addProductInven = (newProduct) => {
    setProucts([...products, newProduct]);
  };

  return (
    <>
      <main className="p-3 flex flex-col gap-5 h-screen">
        <Header>
          <Container>
            <MainHeader>ZML Soultion</MainHeader>
            <SubHeader>Invoice app</SubHeader>
          </Container>
        </Header>
        <Section>
          <Container>
            <div className="flex flex-col gap-6">
              <CreationForm products={products} addProduct={addProduct} />
              <TableForm
                items={items}
                deleteItem={deleteItem}
                updateQuantity={updateQuantity}
              />
            </div>
          </Container>
        </Section>
        <Footer>
          <Container>
            <div className="flex items-center gap-4 justify-end">
              <Button onClick={() => setIsOpen(true)} color="blue">
                Manage Inventory
              </Button>
              <Button color="light">Print</Button>
            </div>
          </Container>
        </Footer>
        <Slider
          isOpen={isOpen}
          handleClose={handleClose}
          addProductInven={addProductInven}
          products={products}
        />
      </main>
      <Toaster />
    </>
  );
};

export default App;
