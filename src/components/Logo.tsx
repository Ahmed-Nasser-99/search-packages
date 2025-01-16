import ARLogoIcon from "@/assets/icons/ARLogoIcon";
import ENLogoIcon from "@/assets/icons/ENLogoIcon";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "ar") {
    return <ARLogoIcon />;
  }
  return <ENLogoIcon />;
};

export default Logo;
