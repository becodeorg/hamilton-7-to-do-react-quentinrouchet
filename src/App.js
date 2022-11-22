import Title from './components/title.js';
import TodoList from './components/list.js'

/* sass import */
import "./sass/pages/home.scss"

export default function App() {
  return (
    <>
      <Title />
      <section className="container">
        <TodoList />
      </section>
    </>
  )
}