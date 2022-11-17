import './App.css';

import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import BlogForm from './Pages/BlogPost/BlogForm';

function App() {
  // color pallete https://coolors.co/161f24-bdaca2-ab9586-674b40
  return (
    <div className="App">
      <Login />
      <Profile />
      <BlogForm placeholder={"TESTING"}/>
    </div>
  );
}

export default App;
