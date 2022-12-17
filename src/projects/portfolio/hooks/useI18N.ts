import { useContext } from "react";
import { I18NContext } from "../components/I18NProvider";

function useI18N(projectName: string) {
  const { getI18N } = useContext(I18NContext)
  return getI18N(projectName);
}

export default useI18N