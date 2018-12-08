import React from "react";
import Layout from "../components/layout";
import Member from "../components/Member";
import axios from "axios";

const Home = ({ users, projects }) => (
  <Layout title="Team Manage App">
    <Member users={users} projects={projects} title={"Members"} />
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userRaw = await axios.get(
    "https://team-manage-api.herokuapp.com/v1/user"
  );
  const projectRaw = await axios.get(
    "https://team-manage-api.herokuapp.com/v1/project"
  );

  return { users: userRaw.data.data, projects: projectRaw.data.data };
};

export default Home;
