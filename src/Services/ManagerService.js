import { components } from '@/components/'
let api = 'http://localhost:3000/'

async function getAll() {
  try {
    const getManagers = await fetch(`${api}managers`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
    
    if(getManagers.status == 401) {
      location.href = 'login'
      localStorage.removeItem('token')
    }
    

    components.getAllEmployees = await getManagers.json()

    return
  } catch (error) {
    throw 'employees getAll Error'
  }
}

async function searchUsers(query) {
  try {
    const response = await fetch(`${api}managers?name_like=${query}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

async function editManagerStatus(e) {
  try {
    console.log(e)

    let id = components.employeesId
    const manager = await fetch(`${api}managers/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({
        isActive: e,
      }),
    })
    console.log(await manager.json())
  } catch (error) {
    throw 1
  }
}

async function deleteManager(id) {
  try {
    console.log(id);
    
    const response = await fetch(`${api}managers/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')      },
      method: 'DELETE',
    })
  } catch (error) {
    throw 1
  }
}

async function editManager(e) {
  try {
    const response = await fetch(`${api}managers/${e.id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        name: e.firstName,
        email: e.email,
        last_name: e.lastName,
        type: e.userType,
        isActive: e.isActive,
        tasks: e.tasks,
      }),
    })
  } catch (error) {
    throw 1
  }
}

async function addManager(e) {
  try {
    const response = await fetch(`${api}managers`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: e.firstName,
        email: e.email,
        last_name: e.lastName,
        type: e.userType,
        isActive: e.isActive,
        tasks: [],
      }),
    })
  } catch (error) {
    throw 1
  }
}

async function getByid(e) {
  try {
    const response = await fetch(`${api}managers/${e}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
    components.getById = await response.json()
  } catch (error) {
    throw 1
  }
}

export { getAll, editManagerStatus, deleteManager, editManager, addManager, getByid, searchUsers }
