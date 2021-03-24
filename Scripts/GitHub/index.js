
const { exec } = require("child_process");


console.log("Starting the merging process...");

cmd('gh pr create --title "🔥 Automatic Merge: devel -> main" --body ":rocket: Its that time again! Devel is being merged into main. Lets hope that everything is stable :)"');


function cmd(cmd) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(error.message);
        }
        if (stderr) {
            console.log(error.stderr);
        }
        console.log(stdout);
    });
}