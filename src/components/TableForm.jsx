import { Table } from "flowbite-react";
import React from "react";
import ListItem from "./ListItem";

const TableForm = ({ items , deleteItem , updateQuantity }) => {
  const totalCost = items.reduce((pv, cv) => pv + parseFloat(cv.cost), 0).toFixed(2);
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className="text-end">Price</Table.HeadCell>
          <Table.HeadCell className="text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className="text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <ListItem key={item.id} item={item} deleteItem={deleteItem} updateQuantity={updateQuantity} />
          ))}
          {items.length === 0 && (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell colSpan={5} className="text-center">
                There is no list
              </Table.Cell>
            </Table.Row>
          )}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={3} className="text-end">
              Total
            </Table.Cell>
            <Table.Cell className="text-end">${totalCost}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableForm;
