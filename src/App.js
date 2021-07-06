import './App.css';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import ProfilePhoto from './component/profile/ProfilePhoto';
const App=()=> {
  return (
    <>
      <ProfilePhoto />
      <FullName/>
      <Address />
    </>
  );
};

export default App;
