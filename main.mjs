import { createSignal, createEffect, createMemo, untrack } from './reactive.mjs';

const [count, setCount] = createSignal(0);
const [count2, setCount2] = createSignal(2);
const [show, setShow] = createSignal(true);

// createEffect(() => {
//   if (show()) console.log(count());
//   else console.log(count2());
// }); // 0

// setShow(false); // 2
// setCount(10);

// const sum = createMemo(() => count() + count2());

// createEffect(() => {
//   console.log(count(), count2(), sum());
// });

createEffect(() => {
  console.log(untrack(() => count()));
});

setCount(30);
