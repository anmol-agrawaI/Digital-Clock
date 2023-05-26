import './App.css';
import React,{useState} from 'react';



const App=()=>{

  let time= new Date().toLocaleTimeString();
  let date=new Date().toLocaleDateString('en-us',{month:"short",day:"2-digit",year:"numeric"});
  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(date);
  const UpdateDateTime = () => {
    time=new Date().toLocaleTimeString();
    date=new Date().toLocaleDateString('en-us',{month:"short",day:"2-digit",year:"numeric"});
    setCtime(time);
    setCdate(date);
  }
  setInterval(UpdateDateTime,500)

  return (
    <div className='container-fluid'>
      <div className='app-wrapper'>
        <div>
        <h1 className='date-class'>{cdate}</h1>
        <div>
        <h1 className='time-class' >{ctime}</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
