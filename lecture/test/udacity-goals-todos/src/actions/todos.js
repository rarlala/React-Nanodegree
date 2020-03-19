// 4. 설치한 goals-todos-api 가져오기
import API from 'goals-todos-api';

// 1. 모든 상수 가져오기
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// 2. action creator 가져오기
function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

// 3. 비동기 action creator
export function handleAddTodo(name, cb){
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
          dispatch(addTodo(todo))
          cb()
      })
      .catch(() => {
        alert('Error')
      })
  }
}

export function handleDeleteTodo(todo){
  return (dispatch) => {
      dispatch(removeTodo(todo.id));

      return API.deleteTodo(todo.id)
          .catch(()=>{
              dispatch(addTodo(todo))
              alert('Error')
          })
  }
}

export function handleToggle(id){
  return (dispatch) => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id)
      .catch(()=> {
        dispatch(toggleTodo(id))
        alert('Error')
      })
  }
}