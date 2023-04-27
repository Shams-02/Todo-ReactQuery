import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const TodoCard = ({ item, refetch }) => {

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.patch(`http://localhost:3000/update/${item.id}`, data)
    },
    onSuccess: () => {
      refetch()
    }
  })


  const updateStatus = (e) => {
    const status = e.target.checked;
    mutation.mutate({ status: status })
  }
  return (
    <div className="px-4 py-6 rounded-md bg-white shadow-md">
      <div className="flex gap-3 justify-between items-start">
        <h5 className={`${item.status && 'line-through text-gray-400'}`}>{item.title}</h5>
        <input type="checkbox" checked={item.status} onChange={updateStatus} />
      </div>
    </div>
  )
}

export default TodoCard