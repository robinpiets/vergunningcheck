import { Heading, ListItem } from "@amsterdam/asc-ui";
import React, { FunctionComponent } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Link, List } from "../../atoms";
import { urls } from "../../config";
import { eventNames } from "../../config/matomo";
import { PERMIT_FREE } from "../../utils/test-ids";

const DemolitionPermitFree: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading forwardedAs="h3" data-testid={PERMIT_FREE}>
        {t("outcome.payAttentionTo.pay attention heading")}
      </Heading>
      <List variant="bullet">
        <ListItem>
          <Trans
            i18nKey={"outcome.payAttentionTo.permit free demolition exception"}
          >
            Misschien staat in het bestemmingsplan dat een vergunning toch nodig
            is.
            <Link
              eventName={eventNames.VIEW_ZONING_PLAN}
              href={urls.VIEW_ZONING_PLAN}
              variant="inline"
              target="_blank"
            >
              Lees verder hoe u een bestemmingsplan bekijken kunt.
            </Link>
          </Trans>
        </ListItem>
        <ListItem>{t("outcome.payAttentionTo.take in account")}</ListItem>
      </List>
      <Heading forwardedAs={"h3"}>
        {t("outcome.thinkAbout.also think about")}
      </Heading>
      <List variant={"bullet"}>
        <ListItem>{t("outcome.thinkAbout.placement of a crane")}</ListItem>
        <ListItem>{t("outcome.thinkAbout.disposal of waste")}</ListItem>
        <ListItem>
          {t("outcome.thinkAbout.the risk of still encountering asbestos")}
        </ListItem>
        <ListItem>{t("outcome.thinkAbout.permission from the VvE")}</ListItem>
        <ListItem>{t("outcome.thinkAbout.consent from neighbors")}</ListItem>
      </List>
    </>
  );
};

export default DemolitionPermitFree;
