import React from "react";
import StyleFooterLinks from "./style";
import FooterContact from "../FooterContact";
import FooterList from "../FooterList";

const FooterLinks: React.FC<{
  links: boolean;
  header: string;
  items: { name: string; slug: string }[];
  base: string;
}> = (props) => {
  return (
    <StyleFooterLinks>
      <h2>{props.header}</h2>
      {props.links && <FooterList base={props.base} list={props.items} />}
      {!props.links && <FooterContact />}
    </StyleFooterLinks>
  );
};

export default FooterLinks;
