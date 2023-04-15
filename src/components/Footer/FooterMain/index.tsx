import React from "react";
import StyleFooterMain from "./style";
import Container from "../../UI/Container";
import FooterIcons from "../FooterIcons";
import FooterLinks from "../FooterLinks";
import FooterCredits from "../FooterCredits";

const FooterMain = () => {
  return (
    <StyleFooterMain>
      <Container>
        <div className="lists">
          <FooterIcons />
          <FooterLinks
            links={true}
            base="products"
            items={[
              { name: "Yeni", slug: "new" },
              { name: "Endirimlər", slug: "discount" },
              { name: "Aksessuarlar", slug: "accessoires" },
              { name: "Bütün brendlər", slug: "all-brands" },
            ]}
            header="Menu"
          />
          <FooterLinks
            links={true}
            base=""
            items={[
              { name: "Tez-tez soruşulan suallar", slug: "" },
              { name: "Çatdırılma xidməti", slug: "" },
              { name: "Geri qaytarılma şərtləri", slug: "" },
            ]}
            header="Kömək"
          />
          <FooterLinks base="" links={false} items={[]} header="Əlaqə" />
        </div>
        <FooterCredits />
      </Container>
    </StyleFooterMain>
  );
};

export default FooterMain;
