// /* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  // let,var,const
  //let [sub1,sub1Chg] = useState('강아지','고양이','망아지');
  let [sub1,sub1Chg] = useState(['강아지','고양이','망아지']);  
  let tail ="저작권 : 나르고(주) 2024...";

  // let [sub2,date2] = useState('고양이','20');
  // let [sub3,date3] = useState('망아지','30');
  // let num = [1,2,3,4,5];
  // let first = num[0];
  // let second = num[4];

  //디스트럭처링 = 왼=오 깔맞춤
  // let [c,d,e,f,g] = [1,2,3,4,5];
  
  let [count,countChg] = useState(0);
  
  function cnt(){
    console.log(111);

  }


  return (
    <div className="App">
        <div className="black-nav">
          <h2 style={{color : 'red'}}>AutoCargo...</h2>
        </div>


        <button onClick={ ()=>{
          let copy = [...sub1];
          copy[0] = '호랑이';
          sub1Chg(copy);
        }}>modify</button>


        <div className="list">
          {/* <h2>{sub1} <span onClick={function(){console.log(1)}}>👍</span>{click}</h2> */}
          {/* <h2>{sub1} <span onClick={() => {console.log(1)}}>👍</span>{click}</h2> */}
          <h2>{sub1[0]} <span onClick={()=>{countChg(count+1)}}>👍</span>{count}</h2>
          <h4>2024-05-27</h4>
        </div>
        <div className="list">
          <h2>{sub1[1]}...</h2>
          <h4>2024-05-28</h4>
        </div>
        <div className="list">
          <h2>{sub1[2]}...</h2>
          <h4>2024-05-25</h4>
        </div>

        <Modal/>

        {cnt}


        <h4>{tail}</h4>
    </div>        
  );
}


function Modal(){
  return(
    <>
      <div className="modal">
        <h2>제목</h2>
        <h4>날자</h4>
        <p>내용</p>
      </div>
    </>

  )
}

export default App;
