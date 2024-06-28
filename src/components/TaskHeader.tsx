import { useTranslation } from "react-i18next";

const TaskHeader = () => {
    const { t } = useTranslation();

  return (
    <div>
          <h1 className="text-center font-bold py-2 bg-sky-600 text-white w-[full] mb-8 text-2xl">
              {t('title')}
          </h1>
    </div>
  )
}
export default TaskHeader