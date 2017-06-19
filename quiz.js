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
	current: '0 out of 5',
	score: '0 correct, 0 incorrect',
}

$(start button).click(function(event) {
	
})