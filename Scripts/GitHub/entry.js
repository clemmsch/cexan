const { exec } = require("child_process");

exec("npm run start", (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
    }
    if (stderr) {
        console.log(error.stderr);
    }
    console.log(stdout);
});