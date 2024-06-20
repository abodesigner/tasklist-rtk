import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todo/todoSlice';
import type { ITodo } from '../interfaces/todo'
import { RootState } from '../app/store';
import TodoItem from './TodoItem';

const TodoList = () => {

    const dispatch = useDispatch()

    const todos = useSelector((state: RootState) => state.todo.todos)


    const removeTodoHandler = (id: number) => {
        return dispatch(removeTodo(id))
    }

    const toggleTodoHandler = (id: number) => {
        return dispatch(toggleTodo(id))
    }

    return (

        <div className="p-4">

            {
                todos.map((todo: ITodo, index: number) => (

                    <TodoItem
                        key={index}
                        todo={todo}
                        handleToggleTodo={()=>toggleTodoHandler(todo.id)}
                        handleTodoRemove={()=>removeTodoHandler(todo.id)} />
                ))
            }
        </div>
    )
}
export default TodoList