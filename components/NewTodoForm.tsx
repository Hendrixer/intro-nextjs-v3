import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default NewTodoForm
