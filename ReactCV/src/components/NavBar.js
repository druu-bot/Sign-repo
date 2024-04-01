import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import learnSignLogo from "../../src/assets/images/learnSignLogo.png";
import menuIcon from "../../src/assets/icons/menu.png";
import closeIcon from "../../src/assets/icons/close.png";

const StyledAppBar = styled.div`
  position: relative; /* Changed from absolute to relative for demo */
  display: flex;
  justify-content: space-between; /* Adjusted for better spacing */
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f0f8ff; /* Light background color for visibility */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 140px;
`;

const StyledText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #334589;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 10px; /* Added for spacing between logo and text */

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 0 20px;
  font-size: 20px;
  font-weight: 400;
  color: #334589;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MobileMenuIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none; /* Hide by default, only show in mobile view */
  margin-right: 20px; /* Added for spacing between links and icon */
  @media only screen and (max-width: 768px) {
    display: block; /* Show icon on mobile */
  }
`;




function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <StyledAppBar>
      <LogoContainer>
        <StyledLogo src={learnSignLogo} alt="LearnSign Logo" />
        <StyledText>Learnsign</StyledText>
      </LogoContainer>
      <StyledNav>
        <StyledLink to="/wordgame">WordGame</StyledLink>
        <StyledLink to="/baseline">AlphabetGame</StyledLink>
        <MobileMenuIcon src={menuOpen ? closeIcon : menuIcon} alt="Menu" onClick={toggleMenu} />
      </StyledNav>
      
    </StyledAppBar>
  );
}

export default NavBar;
