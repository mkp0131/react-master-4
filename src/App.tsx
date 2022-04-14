import { txtSelector, txtState } from 'atoms';
import React from 'react';
import { useRecoilState } from 'recoil';

function formatNum(numStr: string) {
  let result = numStr;

  if (numStr[0] === '0') {
    result = result.substring(1);
  }

  if (numStr.length === 0) result = '0';
  return result;
}

function App() {
  const [txt, setTxt] = useRecoilState(txtState);
  const [transTxt, setTransTxt] = useRecoilState(txtSelector);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      currentTarget: { value },
    } = event;

    setTxt(formatNum(value));
  };

  const onChange2 = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      currentTarget: { value },
    } = event;

    setTransTxt(formatNum(value));
  };

  // const onClick = (event: React.MouseEvent<HTMLInputElement>, type: string) => {
  //   event.preventDefault();
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   if (value === '0') {
  //     if (type === 'one') {
  //       setTxt('');
  //     } else {
  //       setTransTxt('');
  //     }
  //   }
  // };

  return (
    <div className="container">
      <div className="inner">
        <h1>🌴 환율</h1>
        <div className="input-container">
          <label>
            <input
              type="number"
              value={txt}
              // onClick={(event) => onClick(event, 'one')}
              onChange={onChange}
              step="1"
              min="0"
              pattern="\d*"
            />
          </label>
          <label>
            <input
              type="number"
              value={transTxt}
              // onClick={(event) => onClick(event, 'two')}
              onChange={onChange2}
              step="1"
              min="0"
              pattern="\d*"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
