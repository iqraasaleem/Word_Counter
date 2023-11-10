import inquirer from "inquirer";
function wordCounter(paragraph) {
    let freeSpace = paragraph.replace(/\s/g, "");
    return freeSpace.length;
}
async function startWordCounter(wordCounter) {
    do {
        let response = await inquirer.prompt({
            type: "input",
            message: "write text here...",
            name: "paragraph"
        });
        console.log(wordCounter(response.paragraph));
    } while (true);
}
startWordCounter(wordCounter);
