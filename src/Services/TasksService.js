import { components } from '@/components/'
let api = 'http://localhost:3000/'

async function getAllTasks() {
  try {
    const getTasks = await fetch(`${api}tasks`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
    components.getAllTasks = await getTasks.json()
    return
  } catch (error) {
    throw 1
  }
}

async function postTask(e) {
  try {
    const response = await fetch(`${api}tasks`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: e.name,
        type: e.type,
      }),
    })
  } catch (error) {
    throw 1
  }
}

async function deleteTask(id) {
  try {
    const response = await fetch(`${api}tasks/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      method: 'DELETE',
    })
  } catch (error) {
    throw 1
  }
}
export { getAllTasks, postTask, deleteTask }
