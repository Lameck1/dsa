// const maxCounters = (N, A) => {
//   let max = 0;
//   let counters = new Array(N).fill(0);
//   for (let i = 0; i < A.length; i++) {
//     let num = A[i];
//     if (num > N) {
//       max = Math.max(...counters);
//       counters = new Array(N).fill(max);
//     } else {
//       counters[num - 1]++;
//       max = Math.max(max, counters[num - 1]);
//     }
//   }
//   return counters;
// };

// const maxCounters = (N, A) => {
//   let counters = Array(N).fill(0);
//   let max = 0;

//   for (i = 0; i < A.length; i++) {
//     if (A[i] === N + 1) {
//       counters = Array(N).fill(max);
//     } else {
//       const index = A[i] - 1;
//       counters[index]++;
//       if (counters[index] > max) max = counters[index];
//     }
//   }
//   return counters;
// };

const maxCounters = (N, A) => {
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let maxToSet = 0;

  for (let i = 0; i < A.length; i++) {
    let X = A[i] - 1;
    if (X === N) {
      maxToSet = maxCounter;
    } else if (0 <= X && X < N) {
      counters[X] = Math.max(counters[X] + 1, maxToSet + 1);
      maxCounter = Math.max(counters[X], maxCounter);
    }
  }

  counters = counters.map((val) => Math.max(val, maxToSet));
  return counters;
};

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4]));
