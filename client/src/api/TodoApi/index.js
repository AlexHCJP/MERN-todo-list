import Axios from 'axios'

const apiPrefix = "http://localhost:3010"
const TodoApi = {
    list(){
        return Axios.get(`${apiPrefix}/todos`)
    },
    one(id){
        return Axios.get(`${apiPrefix}/todo/${id}`)
    },
    create(data){
        return Axios.post(`${apiPrefix}/todo`, data)
    },
    delete(id){
        return Axios.delete(`${apiPrefix}/todo/${id}`)
    },
    update(data){
        return Axios.put(`${apiPrefix}/todo/${data.id}`, data)
    },
    
}
export default TodoApi