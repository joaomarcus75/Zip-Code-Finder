import { FiSearch } from 'react-icons/fi'
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
      <FiSearch size={25} color="#000"/>
      </button>

    </div>

      <main className="main">
       <h2>Zip Code: 12312123</h2>

       <span>CLOTILDE'S SREETH 41</span>
       <span>Complement: any thing</span>
       <span>CHAVO VILLAGE</span>
       <span>Colorado - USA</span>

      </main>



    </div>
    
  );
}

export default App;
