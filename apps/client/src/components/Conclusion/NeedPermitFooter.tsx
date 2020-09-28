import { Heading, Paragraph } from "@datapunt/asc-ui";
import React from "react";

import { urls } from "../../config";
import { NEED_PERMIT } from "../../utils/test-ids";
import Link from "../Link";

const NeedPermitFooter: React.FC = () => (
  <>
    <Heading forwardedAs="h2" data-testid={NEED_PERMIT}>
      Meer weten?
    </Heading>
    <Paragraph gutterBottom={36}>
      Wilt u weten hoe de aanvraag werkt? Of wat de kosten zijn en waar u nog
      meer aan moet denken als u gaat starten? Op onze pagina{" "}
      <Link
        eventName="omgevingsvergunning informatie"
        href={urls.AMSTERDAM_MORE_INFO}
        variant="inline"
      >
        omgevingsvergunning
      </Link>{" "}
      vindt u alle informatie.
    </Paragraph>
  </>
);

export default NeedPermitFooter;