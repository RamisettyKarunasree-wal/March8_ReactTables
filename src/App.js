import "./App.css";
import BasicReactTable from "./BasicReactTable";
import SortableReactTable from "./SortableReactTable";
import PaginationReactTable from "./PaginationReactTable";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink className="link" activeClassName="active" to="/basicTable">
          React Basic Table
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/sortableTable">
          React Sortable Table
        </NavLink>
        <NavLink
          className="link"
          activeClassName="active"
          to="/paginationTable"
        >
          React Pagination Table
        </NavLink>
        <Routes>
          <Route path="/basicTable" element={<BasicReactTable />} />
          <Route path="/sortableTable" element={<SortableReactTable />} />
          <Route path="/paginationTable" element={<PaginationReactTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
