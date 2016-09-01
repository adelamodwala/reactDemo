export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        todo
    }
}

export function completeTodo(todo) {
    return {
        type: "COMPLETE_TODO",
        todo
    }
}

export function toggleTodos(filter) {
    return {
        type: "TOGGLE_TODOS",
        filter
    }
}