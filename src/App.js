import Input from './components/input.js';
import Title from './components/title.js';
import Button from './components/button.js';
import List from './components/list.js';

/* sass import */
import "./sass/pages/home.scss"

export default function App() {
  return (
    <>
      <Title />
      <section>
        <div className='add-todo'>
          <Input />
          <Button />
        </div>
        <List />
      </section>
    </>
  )
}