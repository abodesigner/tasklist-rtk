export interface ITodo {
    id: number
    text: string
    isDone: boolean
}

export interface ITodoState {
    todos: ITodo[]
}


// TaskItem interface
export interface ITodoItem {
    handleTodoRemove: (id: number) => void;
    handleToggleTodo: (id: number) => void;
    todo: ITodo;
}