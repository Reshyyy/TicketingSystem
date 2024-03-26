// pagination.js
import React from "react";
import { Pagination } from "react-bootstrap";

const MyPagination = ({ total, current, onChangePage }) => {
  let items = [];

  for (let page = 1; page <= total; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === current}
        onClick={() => onChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;

}

export default MyPagination;
