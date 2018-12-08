import React from "react";
import Layout from "../components/layout";
import Projects from "../components/Project";
import axios from "axios";

const ProjectsPage = ({ projects }) => (
  <Layout title="Projects">
    <Projects projects={projects} title="Projects" />
  </Layout>
);

ProjectsPage.getInitialProps = async req => {
  const res = await axios.get(
    "https://team-manage-api.herokuapp.com/v1/project"
  );
  return { projects: res.data.data };
};

export default ProjectsPage;
