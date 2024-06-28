import AddTodoForm from "./components/AddTodoForm";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./i18n";
import useLocalizeDocumentAttributes from "./rtlSupport"


function App() {

  const { i18n } = useTranslation();

  useLocalizeDocumentAttributes();

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">ف

      <select
        className="px-4 py-2"
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>

      <AddTodoForm />
    </div>

  )
}

export default App
