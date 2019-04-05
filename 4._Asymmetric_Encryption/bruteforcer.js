const randomstring = require("randomstring");
const validator = require("./validator.js");
/* const workerify = require('worker-union/workerify');

const WorkerPool = require('worker-union');

 const pool = new WorkerPool({
    path: path.resolve(__dirname + 'worker.js'), 
}); 
pool.start();*/

console.time("Brute forced in");
let iteration = 0;

for (;;) {
    iteration++;
    const randomPassword = randomstring.generate({
        length: 3
    });

    const result = validator.validate(randomPassword);

    if (result) {
        console.log("-------------------------");
        console.log("Final Iteration:", iteration);
        console.log("The password is:", randomPassword)
        console.timeEnd("Brute forced in");
        process.exit(1);

    }

   console.log("Iteration: ", iteration)
}
