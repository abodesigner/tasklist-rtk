import { MdDelete } from "react-icons/md";
import { ITodoItem } from "../interfaces/todo"

const TodoItem = ({ todo, handleToggleTodo, handleTodoRemove }: ITodoItem) => {

    return (

        <div className="flex justify-between items-center mb-2 border border-gray-200 w-[500px] outline-none bg-transparent p-2 text-gray rounded">
            <div className="flex justify-between items-center">

                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handleToggleTodo(todo.id)}
                    className="
        placeholder:text-gray-300"
                />

                <p className={`text-gray-700 ${todo.isDone ? "line-through" : null} ltr:ml-4 rtl:mr-4`}>{todo.text.trim().toLowerCase()}</p>

            </div>
            <button className="p-2 text-red-500 rounded hover:bg-red-500 hover:text-white"
                onClick={() => handleTodoRemove(todo.id)}>
                <MdDelete />
            </button>

        </div>

    )
}
export default TodoItem