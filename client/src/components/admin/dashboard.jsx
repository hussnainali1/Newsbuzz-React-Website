import React from "react";
import SideBar from "./sidebar";
import { Route, Redirect } from "react-router-dom";
import Users from "./../users";
import DashboardDesc from "./dashboardDesc";
import Complains from "../complains";
import ComplainDetail from "../complainDetail";
import Ads from "./ads";
import Funds from "./funds";

const Dashboard = ({ match }) => {
  return (
    <div className="container my-5">
      <div className="mb-5">
        <SideBar />
      </div>
      <Route exact path="/dashboard/desc" component={DashboardDesc} />
      <Route exact path="/dashboard/users" component={Users} />
      <Route path="/dashboard/complaindetail/:id" component={ComplainDetail} />
      <Route exact path="/dashboard/complains" component={Complains} />
      {/* <Redirect from="/dashboard" to="/dashboard/desc" /> */}
    </div>
  );
};

export default Dashboard;
