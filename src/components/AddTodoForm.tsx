import { useState } from "react"
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice";
import toast, { Toaster } from 'react-hot-toast';
import TodoList from "./TodoList";
import TaskHeader from "./TaskHeader";
import { useTranslation } from "react-i18next";

const AddTodoForm = () => {

    const { t } = useTranslation();

    const [todoInput, setTodoInput] = useState<string>('')

    // Init a dispatch handler to call your reducers
    const dispatch = useDispatch()

    // Add todo handler
    const addTodoHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (todoInput.trim().length === 0) return toast.error("Todo can't be empty")

        // Dispatch the add todo action from the reducer
        dispatch(addTodo(todoInput))

        // Reset the input state
        setTodoInput('')
    }


    return (
        <div className="my-8 shadow-xl border">
            <TaskHeader />
            <form className="px-4 mb-4 font-opensans" onSubmit={addTodoHandler}>
                <input
                    type="text"
                    className="outline-none bg-transparent
        border border-gray-500 p-2 w-[500px] text-gray mb-4 rounded
        placeholder:text-gray-300"
                    placeholder={t('placeholder_val')}
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                />

                <button className="bg-gray-700 border-none p-2
                 text-white cursor-pointer rounded ltr:ml-2 rtl:mr-2">
                    <IoIosAddCircle />
                </button>
                <Toaster position="bottom-right" />
            </form>

            <TodoList />
        </div>
    )
}
export default AddTodoForm