const state = {
	questions: [
		{
			text: 'What is the capital of California?',
			choices: ['Seattle', 'Portland', 'Las Vegas', 'Sacramento'],
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
			choices: ['Albany', 'New York City', 'Buffalo', 'Syracuse']
			correctChoiceIndex: 0
		}
	],
	view: 'Start',
	current: 0,
	score: '0 correct, 0 incorrect',
}

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











