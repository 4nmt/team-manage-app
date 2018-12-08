import React from "react";
import { Card, CardTitle, CardText, CardBody, Table } from "reactstrap";
import RemoveModal from "./RemoveModal";

const Project = ({ projectID, name, description, users }) => {
  return (
    <Card className="m-3 shadow p-3 mb-5 bg-white rounded m-3">
      <CardBody>
        <CardTitle>
          <strong>Project:</strong> {name}
        </CardTitle>
        <CardText>
          <hr />
          <h4>
            <strong>Description:</strong>
          </h4>
          {description}
          <hr />
          <h4>
            <strong>User list:</strong>{" "}
          </h4>
          <Table hover>
            <thead>
              <tr className="text-white bg-dark ">
                <th style={{ width: "10%" }}>#</th>
                <th style={{ width: "25%" }}>Name</th>
                <th style={{ width: "50%" }}>Email</th>
                <th style={{ width: "15%" }} />
              </tr>
            </thead>
            <tbody>
              {users.map((obj, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{obj.id}</th>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>
                      <RemoveModal projectID={projectID} userID={obj.id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Project;
