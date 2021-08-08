import HelloComponent from './components/hellocomponent';
import FromComponent from './components/FromComponent';
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 style={{color:'red',textAlign:'center'}}>สวัสดีครับ</h1>
      <FromComponent/>
      <HelloComponent/>
      
    </div>
  );
}

export default App;
 