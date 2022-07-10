import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
