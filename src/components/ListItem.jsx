import { Table } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";

const ListItem = ({ item, deleteItem, updateQuantity }) => {
  const handleDeleteBtn = () => {
    toast('Deleted!', {
      icon: '👏',
      duration : 1000,
    });
    deleteItem(item.id);
  };

  const handleAddQuantity = () => {
    updateQuantity(item.id, 1);
  };

  const handleSubQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, -1);}
    // } else {
    //   toast.error("Quantity must be greater than 1", {
    //     duration: 1000,
    //   });
    // }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.name}
      </Table.Cell>
      <Table.Cell className="text-end">${item.product.price}</Table.Cell>
      <Table.Cell className="text-end">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleSubQuantity}
            className=" active:scale-75 duration-200 bg-blue-700 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={handleAddQuantity}
            className=" active:scale-75 duration-200 bg-blue-700 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </Table.Cell>
      <Table.Cell className="text-end">${item.cost}</Table.Cell>
      <Table.Cell>
        <button
          onClick={handleDeleteBtn}
          className="font-medium text-blue-700 hover:underline dark:text-cyan-500"
        >
          Delete
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ListItem;
