import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { List } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next"; // Importando o hook useTranslation

function Menu() {
  const { i18n } = useTranslation(); // Obtendo a instância do i18next

  // Função para mudar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Troca de idioma
  };

  return (
    <Sheet>
      <SheetTrigger>
        <List size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{i18n.t("menu.title")}</SheetTitle>{" "}
          {/* Usando a tradução aqui */}
          <SheetDescription>
            <button
              className="bg-white text-red-500"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="bg-white text-red-500"
              onClick={() => changeLanguage("pt")}
            >
              Português
            </button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
