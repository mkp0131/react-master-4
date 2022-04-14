const BASE_URL =
  'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.';

export const getCoins = (a: string, b: string) => {
  return fetch(`${BASE_URL}/${a}${b}`).then((res) => res.json());
};
