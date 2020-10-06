import {EventEmitter} from 'events'
import Dispatcher from '../../dispatcher'
import TodoConstans from '../../constans/TodoConstans'

function formatTodo(todo){
    return {
        id: todo._id,
        text: todo.text,
        status: todo.status
    }
}
const CHANGE_EVENT = 'change';

let _todos = []
let _loadingError = null;
let _isLoading = true;

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getTodos() {
        return _todos;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


Dispatcher.register(function(action) {
    switch(action.type) {
        case TodoConstans.LOAD_TODO_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }

        case TodoConstans.LOAD_TODO_SUCCESS: {
            _isLoading = false;
            _todos = action.todos.map( formatTodo );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case TodoConstans.LOAD_NOTES_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;