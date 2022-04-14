import { atom, selector } from 'recoil';

export const txtState = atom({
  key: 'txtState',
  default: '0',
});

export const txtSelector = selector<string>({
  key: 'txtStateSelector',
  get: ({ get }) => {
    const dd = fetch(
      `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));

    const txt = get(txtState);
    return (Number(txt) / 60).toString();
  },
  set: ({ set }, newValue) => {
    const txt = Number(newValue) * 60;
    set(txtState, txt.toString());
  },
});
