import { useState, useEffect } from "react";
import CategoryList from "../components/Categories/CategoryList";
import Heading from "../components/Heading";
import { toast } from "react-toastify";
import DynamicModal from "../components/utils/DynamicModal";
import CategoryCreate from "../components/Categories/CategoryCreate";

export default function Categories() {
  const [modalShow, setModalShow] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleShow = () => {
    setModalShow(true);
  };

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Aldaa garlaa");
      });
  }, []);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={handleShow} />
        <CategoryList items={categories} />
      </div>
      <DynamicModal
        show={modalShow}
        handleClose={handleClose}
        title="Create post"
        content={<CategoryCreate />}
      />
    </>
  );
}
