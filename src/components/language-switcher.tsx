import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")}
    >
      {i18n.language === "ar" ? "English" : "Arabic"}
    </Button>
  );
};

export default LanguageSwitcher;
