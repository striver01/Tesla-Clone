import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/Car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a href="google.com">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p>
              <a href="google.com">{car}</a>
            </p>
          ))}
      </Menu>
      <RightMenu>
        <a href="google.com">Shop</a>
        <a href="google.com">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a href="google.com">{car}</a>
            </li>
          ))}
        <li>
          <a href="google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="google.com">Used Inventory</a>
        </li>
        <li>
          <a href="google.com">Trade-in</a>
        </li>
        <li>
          <a href="google.com">Cyber Truck</a>
        </li>
        <li>
          <a href="google.com">Roadmaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  p a {
    color: #393c41;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #393c41;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 15px;
    flex-wrap: no-wrap;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      color: #393c41;
      font-weight: 600;
    }
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 1s;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
