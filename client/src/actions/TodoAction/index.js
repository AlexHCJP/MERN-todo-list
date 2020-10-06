import Dispatcher from '../../dispatcher'
import TodoApi from '../../api/TodoApi'
import TodoConstans from '../../constans/TodoConstans'


const TodoActions = {
    loadTodos() {
        Dispatcher.dispatch({
            type: TodoConstans.LOAD_TODO_REQUEST
        });

        TodoApi.list()
            .then(({ data }) =>

            Dispatcher.dispatch({
                type: TodoConstans.LOAD_TODO_SUCCESS,
                todos: data
            })
        ).catch(err =>
            Dispatcher.dispatch({
                type: TodoConstans.LOAD_TODO_FAIL,
                error: err
            })
        );
    },

    createTodo(todo) {
        TodoApi.create(todo).then(() =>
            this.loadTodos()
        ).catch(err =>
            console.error(err)
        );
    },

    deleteTodo(todoId) {
        TodoApi.delete(todoId).then(() =>
            this.loadTodos()
        ).catch(err =>
            console.error(err)
        );
    },

    updateTodo(todo) {
        TodoApi.update(todo).then(() =>{
            this.loadTodos()
        }).catch(err =>
            console.error(err)
        );
    },

    todo(todoId, callback) {
        TodoApi.one(todoId).then((res) =>{
            callback(res.data)
        }).catch(err =>
            console.error(err)
        );
    },
};

export default TodoActions