import './App.css';
import img from './20.jpg';
import Profile from './component/profile/Profile';
const App=()=> {
  const handleName =(name) =>{
    alert(name)
  }

  return (
    <>
      <Profile name={"hagar"} bio={"hager mahmoud "} profession={"Engineer"} handleName={handleName}>
       {img}
      </Profile>
     
    </>
  );
};

export default App;
