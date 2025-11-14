const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const q = Promise.reject(new Error("Error message"));
q.catch((err) => console.log(err.message));
