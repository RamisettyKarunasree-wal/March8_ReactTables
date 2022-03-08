import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const PaginationReactTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
  ];
  return <DataTable columns={columns} data={data} pagination />;
};
export default PaginationReactTable;
