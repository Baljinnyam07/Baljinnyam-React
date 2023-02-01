import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import relateTime from "dayjs/plugin/relativeTime";
import currencyFormatter from "../utils/currencyFormatter";
import { Link, useLocation } from "react-router-dom";

dayjs.extend(relateTime);

export default function Products() {
  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/products?pageSize=${pageSize}&page=${currentPage}`
      )
      .then((res) => {
        setPage(res.data);
      });
  }, [currentPage, pageSize]);

  useEffect(() => {
    const seasrchParams = new URLSearchParams(location.search);
    if (seasrchParams.has("page")) {
      setCurrentPage(Number(seasrchParams.get("page")));
    }
    if (seasrchParams.has("pageSize")) {
      setPageSize(Number(seasrchParams.get("pageSize")));
    }
  }, [location]);

  if (!page) {
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const getPaginations = () => {
    let result = [];
    // first page adding
    result.push(
      <li className={`page-item ${1 === page.page && "active"}`}>
        <a className="page-link" href="#">
          1
        </a>
      </li>
    );
    // front trible dots
    if (page.page - 3 > 0) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    if (page.page !== 1 && page.page !== page.totalPages) {
      result.push(
        <li className={`page-item active`}>
          <a href="#" className="page-link">
            {page.page}
          </a>
        </li>
      );
    }

    if (page.totalPages - 3 >= page.page) {
      // back trible dots
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    // last page adding
    result.push(
      <li className={`page-item ${page.totalPages === page.page && "active"}`}>
        <a className="page-link" href="#">
          {page.totalPages}
        </a>
      </li>
    );
    return result;
  };

  return (
    <main>
      <div className="container">
        <div>
          <label for="points">Price</label>
          <input
            className="w-25"
            type="range"
            min="10000"
            max="1000000"
            step="50000"
            onChange={(e) => console.log(e.target.value)}
          ></input>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <label>
            Хуудаслалт &nbsp;
            <select
              className="form-control d-inline-block w-auto"
              onChange={(e) => setPageSize(e.target.value)}
              value={pageSize}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <div className="row gy-4">
          {page.items.map((product) => {
            return (
              <div className="col-sm-4" key={product.id}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="product-card-desc">
                    <div className="product-card-date">
                      {dayjs(Number(product.createdAt) * 1000).fromNow()}
                    </div>
                    <div className="product-card-name">{product.name}</div>
                    <div className="product-card-price">
                      {currencyFormatter(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <nav aria-label="..." className="my-4">
          <ul className="pagination pagination-lg justify-content-center">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <Link
                to={`/products?pageSize=${pageSize}&page=${currentPage - 1}`}
                className="page-link"
              >
                Previous
              </Link>
            </li>
            {getPaginations()}
            <li
              className={`page-item ${
                currentPage === page.totalPages && "disabled"
              }`}
            >
              <Link
                to={`/products?pageSize=${pageSize}&page=${currentPage + 1}`}
                className="page-link"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
