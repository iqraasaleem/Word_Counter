import inquirer from "inquirer";


function wordCounter(paragraph:string) {
        let freeSpace = paragraph.replace(/\s/g,"")

        return freeSpace.length
    
}

async function startWordCounter(wordCounter: (paragraph: string)=> number) {
    do {
        let response = await inquirer.prompt({
            type: "input",
            message: "write text here...",
            name: "paragraph"
    
        })
        
        console.log(wordCounter(response.paragraph));
        
    } while (true);
    
    
}
startWordCounter(wordCounter)