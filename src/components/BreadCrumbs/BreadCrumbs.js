import React from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./BreadCrumbs.styles";

export default function BreadCrumbs({ movieTitle }) {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
}