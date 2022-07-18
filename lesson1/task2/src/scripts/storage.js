// export const tasks = [
//   { text: 'Buy milk', done: false, id: Math.random().toString() },
//   {
//     text: 'Pick up Tom from airport',
//     done: false,
//     id: Math.random().toString(),
//   },
//   { text: 'Visit party', done: false, id: Math.random().toString() },
//   { text: 'Visit doctor', done: true, id: Math.random().toString() },
//   { text: 'Buy meat', done: true, id: Math.random().toString() },
// ];

const storage = {};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
