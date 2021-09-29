import React from "react";
import { Link } from "react-router-dom";

//imgs
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="RMDB-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
