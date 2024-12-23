import React from "react";
import { Terminal } from "@phosphor-icons/react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { useTranslation } from "react-i18next";
function AlertHome() {
  const { t, i18n } = useTranslation();
  return (
    <Alert>
      <Terminal size={32} />
      <AlertTitle className="font-UberMoveBold text-lg">
        {t("alert.titulo")}
      </AlertTitle>
      <AlertDescription className="font-UberMoveNormal text-sm sm:text-base">
        {t("alert.subtitulo")}
      </AlertDescription>
    </Alert>
  );
}

export default AlertHome;
