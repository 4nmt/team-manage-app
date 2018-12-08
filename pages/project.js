import React from "react";
import Layout from "../components/layout";
import Project from "../components/Project/Project";
import axios from "axios";

const ProjectPage = ({ data: { name, description, users }, projectId }) => (
  <Layout title="Project Details">
    <Project
      projectID={projectId}
      name={name}
      description={description}
      users={users}
    />
  </Layout>
);

ProjectPage.getInitialProps = async ({ query: { id } }) => {
  const res = await axios.get(
    `https://team-manage-api.herokuapp.com/v1/project/${id}`
  );
  return { data: res.data.data, projectId: id };
};

export default ProjectPage;
