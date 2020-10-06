import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Todos from './components/Todos';
import { Header } from './components/Header';
import TodoForm from './components/Form/TodoForm';

import TodoStore from './stores/TodoStore';
import TodoAction from './actions/TodoAction';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: TodoStore.isLoading(),
      todos: TodoStore.getTodos(),
    }
    this._onChange = this._onChange.bind(this)
  }

  _onChange() {
    this.setState({
      isLoading: TodoStore.isLoading(),
      todos: TodoStore.getTodos(),
    });
  }
  
  componentWillMount() {
    TodoAction.loadTodos();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  render(){
    const {todos} = this.state
    return (
      <Router>
        <Container>
          <Header/>
          <Switch>
            <Route exact path="/" children={<Todos todos={todos}/> }/>
            <Route exact path="/create" render={(props) => <TodoForm {...props} isCreate={true}/> }/>
            <Route exact path="/update/:id" render={(props) => <TodoForm {...props} isCreate={false}/> }/>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
