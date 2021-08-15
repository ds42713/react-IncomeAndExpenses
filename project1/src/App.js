import Transaction from './components/Transaction';
import FromComponent from './components/FromComponent';
import './App.css'
import DataContext from './data/DataContext';
import { useState,useEffect,useReducer } from 'react';
import Reportcpmponent from './components/ReportComponent';

import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';


function App() {


  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const [items,setItems] = useState([])

  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
       return [newItem,...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income)
    setReportExpense(expense)
  }, [items,reportIncome,reportExpense])

  // reducer state
  const [showReport,setShowReport] = useState(true)
  const reducer = (state,action)=>{
    switch(action.type){
      case 'SHOW':
        return setShowReport(true)
      case 'HIDE':
        return setShowReport(false)
    }
  } 
  
  const [result,dispatch] = useReducer(reducer,showReport)


  return (
    <DataContext.Provider value={{income : reportIncome,expense : reportExpense,}}>
      <div className="container">
        <h1 style={{color:'red',textAlign:'center',fontSize:'1.5rem'}}>บัญชีรายรับรายจ่าย</h1>

        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to='/'>สรุปข้อมูล</Link>
              </li>
              <li>
                <Link to='/insert'>บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/' exact>
                {showReport && <Reportcpmponent/> }
                <button onClick={()=>dispatch({type:'SHOW'})}>แสดง</button>
                <button onClick={()=>dispatch({type:'HIDE'})}>ซ่อน</button>
        
                <Transaction items = {items}/>
              </Route>
              <Route path='/insert'>
                <FromComponent onAddItem={onAddNewItem}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
    
  );
}

export default App;
 