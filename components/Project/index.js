import React from "react";
import { Table, Card, CardTitle, CardBody } from "reactstrap";
import Link from "next/link";
import ProjectModal from "./ProjectModal";

const Projects = ({ projects }) => {
  return (
    <Card className="shadow p-3 mb-5 bg-white rounded m-3">
      <CardTitle>
        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <h3>
              <strong>Projects</strong>
            </h3>
          </div>
          <div class="ml-auto p-2 bd-highlight">
            <ProjectModal buttonLabel={"Add Project"} />
          </div>
        </div>
      </CardTitle>
      <CardBody>
        <Table hover>
          <thead>
            <tr className="text-white bg-dark ">
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "25%" }}>Name</th>
              <th style={{ width: "65%" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((obj, i) => {
              return (
                <Link href={`projects/${obj.id}`}>
                  <tr key={i}>
                    <th scope="row">{obj.id}</th>
                    <td>{obj.name}</td>
                    <td>{obj.description}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Projects;
