import './App.css';
import { Form, Button } from 'react-bootstrap';
import imgSrc from './20.jpg';
function App() {
  return (
<>
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

        <h1 class="title red">Your name here</h1>

        <br />

        <img src={imgSrc} />

        <br />

        <img src="/19.jpg" />
        <br />

      <video width="320" height="240" controls/>

      </div>

</>



      );
}

      export default App;
