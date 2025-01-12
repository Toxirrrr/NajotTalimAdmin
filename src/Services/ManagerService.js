import { components } from "@/components/"
let api = 'http://localhost:3000/'

async function getAll() {
    try {
        const getManagers = await fetch(`${api}managers`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })

        components.getAllEmployees = await getManagers.json()
        console.log(components.getAllEmployees);
        
        return
    } catch (error) {
        throw 'employees getAll Error'
    }
}

async function editManager(e) {
    try {
        console.log(e);
        
        let id = components.employeesId
        let manager = await fetch(`${api}managers/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({
                isActive: e
            })
        })
        console.log(await manager.json());

    } catch (error) {
        throw 1
    }

}

export { getAll, editManager }