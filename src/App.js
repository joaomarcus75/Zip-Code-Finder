import {GiMagnifyingGlass} from 'react-icons/gi'
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Zip Code Finder</h1>

    <div className="containerInput">
      
      <input 
      type="text"
      placeholder="Type the Zip Code.."
      />

      <button className="buttonSearch">
      <GiMagnifyingGlass size={25} color="#000"/>
      </button>

      <main className="main">
       <h2>ZIP CODE: 12312123</h2>

       <span>CLOTILDE'S SREETH 41</span>
       <span>Complement: any thing</span>
       <span>CHAVO VILLAGE</span>
       <span>Colorado - USA</span>

      </main>

    </div>




    </div>
    
  );
}

export default App;
