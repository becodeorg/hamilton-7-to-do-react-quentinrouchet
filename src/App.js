import Title from './components/title.js';
import Form from './components/form.js'
import List from './components/list.js';

/* sass import */
import "./sass/pages/home.scss"

export default function App() {
  return (
    <>
      <Title />
      <section className="container">
        <Form />
        <List />
      </section>
    </>
  )
}