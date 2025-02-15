import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Navbar/Navbar';
import Quiz from './Components/Quiz';
import QuizArray from './Components/QuizArray';
import PlanetsArray from './Components/PlanetsArray';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackForm from './Components/FeedbackForm';
import ToDoList from './Components/ToDoList';
import WordCount from './Components/WordCount';
import PropsDemo from './Components/PropsDemo';
import Home from './Components/Home';
import PPCard from './Components/PPCard';







function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
        <Route path='/' element={<Home />} />

          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/QuizWithArray' element={<QuizArray />} />
          <Route path='/PlanetsWithArray' element={<PlanetsArray />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/word-count" element={<WordCount />} />
          <Route path="/props-demo" element={<PropsDemo />} />
    



        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
