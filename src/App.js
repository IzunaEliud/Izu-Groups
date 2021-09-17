import './App.css';
import Nav from './components/nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUpPage from './components/signUpPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route exact path="/Sign_up">
          <SignUpPage/>
        </Route>
      </div>
    </Router>
    
  );
}

export default App;
