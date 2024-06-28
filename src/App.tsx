import AddTodoForm from "./components/AddTodoForm";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./i18n";


function App() {

  const { i18n } = useTranslation();
  // const [currentLanguage, setCurrentLanguage] = useState(language)

  // const handleChangeLanguage = () => {
  //   const newLanguage = currentLanguage === "en" ? "ar" : "en";
  //   setCurrentLanguage(newLanguage);
  //   changeLanguage(newLanguage);
  // }

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">

      {/* <button type="button" className="bg-emerald-500 p-2 rounded text-white my-2"
              onClick={handleChangeLanguage}>
        Language <span>({currentLanguage})</span>
      </button> */}

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
