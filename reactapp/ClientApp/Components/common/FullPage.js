import React from "react";

import CodeCampMenu from "./CodeCampMenu";
import PageTop from "./PageTop";
import Routes from "../Routes";
import Footer from "./Footer";
export default function FullPage() {
  return (
    <div>
      Tets
      <PageTop>
        <CodeCampMenu />
      </PageTop>
      <Routes />
      <Footer />
    </div>
  );
}
