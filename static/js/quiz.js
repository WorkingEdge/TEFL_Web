function writeQuestions(){
    let quizFrame = JSON.parse(document.getElementById('quiz').innerHTML);
    let quiz = quizFrame.quiz;
    let quizGen = ``;
    
    

    for (let i=0; i<quiz.length; i++){
            let addOptions = ``;
            let correct = quiz[i]["correctAns"];
            let ansOptions = quiz[i]["alts"];
        for (let j=0; j < ansOptions.length; j++){
            addOptions += 
                        `
                        <div class="answer" id="Q${i}Ans${j}" onclick="checkAns(this.id)"><p class="optionText">${ansOptions[j]}</p></div>
                        `
            }

    quizGen += `<div class="questionDiv" id="Opt${correct}">
                    <p class="questionPara">${i+1}. ${quiz[i]["q"]}</p>
                    ${addOptions}
                    </div>
                    <div id="result${i}"></div>    
                        `    
    }
    document.getElementById("quizDiv").innerHTML = quizGen;
}


function checkAns(chosen){
    let question = document.getElementById(chosen);
    let questionBeAns = question.parentElement.id;
    let right = questionBeAns.slice(-1);
    let picked = chosen.slice(-1);
    console.log(right, picked);
    if (right == picked){
        question.classList.remove("answer");
        question.classList.add("rightAns");    
    } else {
        question.classList.remove("answer");
        question.classList.add("wrongAns");
    }
    }