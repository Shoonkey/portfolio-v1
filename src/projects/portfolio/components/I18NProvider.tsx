import { createContext, ReactNode, useMemo, useState } from "react"

interface I18NProviderProps {
  children: ReactNode
}

export type SupportedLanguage = "en-US" | "pt-BR"

interface I18NContextData {
  currentLanguage: SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => void
  getI18N: (projectName: string) => any
}

export const I18NContext = createContext<I18NContextData>({
  currentLanguage: "en-US",
  changeLanguage: (lang: SupportedLanguage) => {},
  getI18N: (projectName: string) => {}
})

function I18NProvider({ children }: I18NProviderProps) {
  const [language, setLanguage] = useState<SupportedLanguage>("en-US")

  const value = useMemo(
    () => ({
      currentLanguage: language,
      changeLanguage: (language: SupportedLanguage) => setLanguage(language),
      getI18N: (projectName: string) => require(`../../../i18n/${language}/${projectName}.json`),
    }),
    [language]
  )

  return <I18NContext.Provider value={value}>{children}</I18NContext.Provider>
}

export default I18NProvider
