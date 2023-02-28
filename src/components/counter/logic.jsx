import { kea, actions, reducers } from 'kea';

const logic = kea([
  actions({
    increment: true,
    decrement: true,
  }),
  reducers({
    counter: [
      0,
      {
        increment: (state, _) => state + 1,
        decrement: (state, _) => (state > 0 ? state - 1 : 0),
      },
    ],
  }),
]);

export default logic;
