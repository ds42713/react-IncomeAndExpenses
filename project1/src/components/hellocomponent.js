import Item from "./item";
import './maincss.css'

import { v4 as uuidv4 } from 'uuid';


const HelloComponent = ()=> {
  const data = [
    {title:'ค่ารักษา' ,amount:2000},
    {title:'ค่าอาหาร' ,amount:10000},
    {title:'ค่าเดินทาง' ,amount:4000},
    {title:'ค่านวด',amount:8000}
  ]
  // {data.map((element)=>{ return <Item title={element.title} amount={element.amount} /> } )}
  // {data.map((element)=>{return <Item {...element} key={uuidv4()} />})}
    return (
      <ul className='item-list'>
        {data.map((element)=>{ 
          return <Item title={element.title} amount={element.amount} key={uuidv4()}/> 
        } )}
      </ul>
     
    );
  }

export default HelloComponent