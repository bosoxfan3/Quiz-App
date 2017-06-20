const state = {
	questions: [
		{
			text: 'What is the capital of California?',
			choices: ['San Diego', 'San Francisco', 'Los Angeles', 'Sacramento'],
			correctChoiceIndex: 3
		},
		{
			text: 'What is the capital of Maryland?',
			choices: ['Baltimore', 'Washington DC', 'Annapolis', 'Rockville'],
			correctChoiceIndex: 2
		},
		{
			text: 'What is the capital of Texas?',
			choices: ['San Antonio', 'Austin', 'Dallas', 'Houston'],
			correctChoiceIndex: 1
		},
		{
			text: 'What is the capital of Louisiana?',
			choices: ['New Orleans', 'Shreveport', 'Baton Rouge', 'Lafayette'],
			correctChoiceIndex: 2
		},
		{
			text: 'What is the capital of New York?',
			choices: ['Albany', 'New York City', 'Buffalo', 'Syracuse'],
			correctChoiceIndex: 0
		}
	],
	view: 'Start' || 'Question' || 'Feedback' || 'Final',
	current: 0,
	score: 0,
}

function submitHandler() {
	$(".start-quiz").click(function(){
		console.log("hello there");
		$(".start-page").attr("hidden", "true");
		$(".question-page").removeAttr("hidden");
	});
}
submitHandler();

function renderQuestion() {
	let result = "";
	for (let i = 0; i < state.questions.length; i++) {
		//current, let i refer to the current count
	let questionHtml = `<div class="question-page" hidden>
		<form class='question-form' action='/some-endpoint' method='post'> 
			<fieldset class='question'>
				<legend class='question-text'>${state.questions[i]["text"]}</legend>
				<input type="radio" name="choice" id="choice-0" value="0">
				<label for="choice-0">${state.questions[i]["choices"][0]}</label>
				<input type='radio' name='choice' id='choice-1' value='1'>
				<label for='choice-1'>${state.questions[i]["choices"][1]}</label>
				<input type='radio' name='choice' id='choice-2' value='2'>
				<label for='choice-2'>${state.questions[i]["choices"][2]}</label>
				<input type='radio' name='choice' id='choice-3' value='3'>
				<label for='choice-3'>${state.questions[i]["choices"][3]}</label>
			</fieldset>
			<button type='submit'>Submit</button>
		</form>
	</div>`;
		result += questionHtml;
	}
	$(".question-page").replaceWith(result);
	//console.log(result);
}
renderQuestion();

//start changes view from "start" to "question"
//next compares "current" to "questions.length"
//on start page:
	//questions start with the hidden class
	//score is hidden
	//results is hidden
	//title h1 is displayed
	//start button is displayed
//what tasks does the start button need to do 
	//hide the start page 
	//show question page
//questions page
	//display current question as a p
	//display choices as radio buttons
	//display submit button 
	//display reset button
//tasks the submit button needs to do:
	//display the score page
		//score page needs to update continuously
	//hide the question
	//display the correct answer
	//display current score
//results page
	//display correct/incorrect in p
	//IF incorrect, display the correct answer
	//ELSE If correct, display a "good job"
	//display current score in a p
	//display next button
	//display reset button
//tasks the next button needs to do:
	//test if there are any more questions
	//move to a question or the last page
//final page
	//If current > question.length-1
		//hide everything but the final page
	//display current score
	//display the reset button
//tasks the reset button needs to do:
	//go to the start page
	//hide everything (questions, current score)

//how do we reference the correct answer?
	//if ($(element["name=y"]["value=x"]) === correctChoiceIndex)
	//id.val=0











