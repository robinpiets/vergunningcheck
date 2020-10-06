import { Paragraph } from "@amsterdam/asc-ui";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layouts/DefaultLayout";
import { urls } from "../config";

const RedirectPage = ({ topic }) => {
  useEffect(() => {
    const redirect = setTimeout(() => {
      window.open(urls.OLO_INTRO, "_self");
    }, 2000);

    return () => {
      clearTimeout(redirect);
    };
  });

  return (
    <Layout heading="Een ogenblik geduld alstublieft">
      <Helmet>
        <title>Redirect naar OLO - {topic.text.heading}</title>
      </Helmet>
      <Paragraph>
        Wij sturen u automatisch door naar de website van het{" "}
        <a title="landelijke Omgevingsloket" href={urls.OLO_INTRO}>
          landelijke Omgevingsloket
        </a>
        .
      </Paragraph>
    </Layout>
  );
};

export default RedirectPage;
