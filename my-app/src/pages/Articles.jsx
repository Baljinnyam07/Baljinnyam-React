import Heading from "../components/Heading";
import HeadingTable from "../components/HeadingTable";

export default function Articles({ handleShow }) {
  return (
    <div className="container-sm body-container">
      <Heading title="Blog posts" handleShow={handleShow} />
      <HeadingTable />
    </div>
  );
}
