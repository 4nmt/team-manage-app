import React, { Component } from "react";
import { Table, Card, CardTitle, CardBody } from "reactstrap";
import MemberModal from "./MemberModal";
import AssignModal from "./AssignModal";

const Members = ({ title, users, projects }) => (
  <Card className="shadow p-3 mb-5 bg-white rounded m-3">
    <CardTitle>
      <div className="d-flex bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <h3>
            <strong>{title}</strong>
          </h3>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <MemberModal buttonLabel="Add Members" />
        </div>
      </div>
    </CardTitle>
    <CardBody>
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
              <tr key={obj.id}>
                <th scope="row">{obj.id}</th>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>
                  <AssignModal
                    key={obj.id}
                    userID={obj.id}
                    projects={projects}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Members;
