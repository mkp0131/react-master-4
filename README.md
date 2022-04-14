# 리액트 마스터 4

### recoil

- selector 사용
- set 으로 state 값을 조작할 수 있다.

```js
export const txtSelector =
  selector <
  string >
  {
    key: 'txtStateSelector',
    get: ({ get }) => {
      const txt = get(txtState);
      return (Number(txt) / 60).toString();
    },
    set: ({ set }, newValue) => {
      console.log(typeof newValue);

      const txt = Number(newValue) * 60;
      set(txtState, txt.toString());
    },
  };
```

- 사용시에는 일반 state 랑 동일하게 useRecoilState(selector) 를 활용

```js
const [transTxt, setTransTxt] = useRecoilState(txtSelector);
```

## 환율 계산기 만드는 중....
