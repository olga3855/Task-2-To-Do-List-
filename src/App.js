import TodoForm from './components/TodoForm';
import Navbar from './components/Navbar';
import TodoContextProvider from './context/TodoContext';
import Sidebar from './components/Sidebar';


const App = () => {

  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <Sidebar />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
