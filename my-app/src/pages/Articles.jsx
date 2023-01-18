import { useState } from "react";
import PostCreate from "../components/Blogs/PostCreate";
import Heading from "../components/Heading";
import HeadingTable from "../components/HeadingTable";

export default function Articles() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-sm body-container">
      <Heading title="Blog posts" handleShow={handleShow} />
      <HeadingTable />
    </div>
  );
}
