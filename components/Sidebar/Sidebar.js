import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import Link from "next/link";
import "./Sidebar.scss";

const Sidebar = () => (
  <div className="bg-dark sidebar__container">
    <div className="sidebar__header p-2">
      <h3 className="text-white sidebar__title">Team Manage App</h3>
    </div>
    <div className="sidebar__body">
      <Nav vertical>
        <Link href="/">
          <a>
            <NavItem className={`sidebar__body__item`}>
              <span className="mx-3">
                <i className="fas fa-users" style={{ width: "30px" }} />
              </span>
              <span>Member</span>
            </NavItem>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <NavItem className={`sidebar__body__item `}>
              <span className="mx-3 ">
                <i className="fas fa-tasks" style={{ width: "30px" }} />
              </span>
              <span>Project</span>
            </NavItem>
          </a>
        </Link>
      </Nav>
    </div>
  </div>
);

export default Sidebar;
