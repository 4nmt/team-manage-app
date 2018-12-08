import Link from "next/link";
import Head from "./head";
import Nav from "./Nav/nav";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./Sidebar/Sidebar";

const style = {
  margin: "0px",
  padding: "0px"
};

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head title={title} />
    <div className="container-fluid" style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col sm="2" style={style}>
          <Sidebar />
        </Col>
        <Col sm="10" style={style}>
          <Nav />
          <Container>{children}</Container>
        </Col>
      </Row>
    </div>
  </div>
);
