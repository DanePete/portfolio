import React, { useEffect, useState } from 'react'
/* First import the API category from Amplify */
// import { API } from 'aws-amplify';

/* Next, import the createContact mutation */
import { createTodo } from '../../graphql/mutations';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify'
// import { createTodo } from './graphql/mutations'
import { listTodos } from '../../graphql/queries'

import awsExports from "../../aws-exports";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }
function Contact() {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function isLoggedIn() {
    // Another way to get if its a guest or not
    //return await Auth.Credentials.getCredSource() === "guest"
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
  }
  
    // Check if the user is logged in or not
  console.log(isLoggedIn());



  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      console.log('todos', todos);
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      await isLoggedIn();
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql({
        query: createTodo,
        variables: {
          input: todo
        },
        authMode: isLoggedIn ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM,
    })
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}


export default Contact;
