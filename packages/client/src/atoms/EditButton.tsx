import { Button } from "@amsterdam/asc-ui";
import React, { FunctionComponent, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { EDIT_BUTTON } from "../utils/test-ids";

const EditButtonStyle = styled(Button)`
  text-decoration: underline;
  &:disabled {
    text-decoration: underline;
  }
  @media print {
    display: none;
  }
`;

const EditButton: FunctionComponent<
  { dataTestid?: string; disabled?: boolean } & HTMLAttributes<HTMLElement>
> = ({ dataTestid = EDIT_BUTTON, disabled = false, onClick }) => {
  const { t } = useTranslation();
  return (
    <EditButtonStyle
      data-testid={dataTestid}
      variant="textButton"
      {...{ disabled, onClick }}
    >
      {t("common.edit")}
    </EditButtonStyle>
  );
};

export default EditButton;
