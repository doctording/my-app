import React, { useState, useEffect} from 'react';
import './grayonly.css';

function UseStatusComponent() {
  const [a, setInputValueA] = useState(0);
  const [b, setInputValueB] = useState(0);
  const [c, setC] = useState(0);

  useEffect( () => {
    console.log('Input value changed:', a);
    console.log('Input value changed:', b);
    const sums = Number(a) + Number(b);
    setC(sums)
  },[a,b])

  const handleChangeValueA = (e) => {
    setInputValueA(e.target.value);
  };

  const handleChangeValueB = (e) => {
    setInputValueB(e.target.value);
  };

  return (
    <div>
      <div>
        a: <input type="number" value={a} onChange={handleChangeValueA} onBlur={setC}/>
      </div>
      <div>+</div>
      <div>
        b: <input type="number" value={b} onChange={handleChangeValueB} onBlur={setC}/>
      </div>
      <div>=</div>
      <div>
        c: <input type="number" value={c} class='gray-readonly' readOnly />
      </div>
    </div>
  );

}

export default UseStatusComponent;