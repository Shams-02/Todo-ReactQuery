import { useQuery } from "@tanstack/react-query";
import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";
import axios from "axios";

const getTodo = () => {
  return axios.get("http://localhost:3000/get-todo");
}

function App() {

  const { data, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodo,

  })
  // console.log(data?.data);

  return (
    <main className="max-w-4xl mx-auto px-5">
      <AddTodo refetch={refetch} />
      <div className="grid grid-cols-2 gap-4 mt-12">
        {data?.data.map((item, index) => <TodoCard key={index} item={item} refetch={refetch} />)}
      </div>
    </main>
  )
}

export default App
