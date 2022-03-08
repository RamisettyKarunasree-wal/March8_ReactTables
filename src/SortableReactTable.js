import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const SortableReactTable = () => {
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
      sortable: "true",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: "true",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: "true",
    },
  ];
  return <DataTable columns={columns} data={data} />;
};
export default SortableReactTable;
