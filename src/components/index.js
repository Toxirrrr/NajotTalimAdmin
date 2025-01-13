import {reactive} from 'vue'

let components = reactive({
    getAllEmployees: [],
    getAllTasks: [],
    getById: {},
    employeesId: 0,
    taskId: 0
})

export { components }