'use strict';

let button = document.querySelector('.button');
let reset = document.querySelector('.reset');
let scores = [
	(document.querySelector('.reactScore').value = 0),
	(document.querySelector('.memoryScore').value = 0),
	(document.querySelector('.verbalScore').value = 0),
	(document.querySelector('.visualScore').value = 0),
];

button.onclick = (scores) => {
	scores = [document.querySelector('.reactScore').value, document.querySelector('.memoryScore').value, document.querySelector('.verbalScore').value, document.querySelector('.visualScore').value];
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] === '' || scores[i] > 100) scores[i] = 0;
		scores[i] = parseInt(scores[i]);
	}
	console.log(scores);

	let sum = scores.reduce((a, b) => {
		return a + b;
	});
	sum = sum / scores.length;
	console.log(sum);

	document.querySelector('.sumScore').innerText = sum;
	if (sum > 99) {
		document.querySelector('.resultText').innerHTML = '<h3>Perfect Score!</h3>';
	} else if (sum <= 99) {
		sum === 0
			? (document.querySelector('.resultText').innerHTML = "<h3>Failed!</h3><p>You've only scored 0 Points!</p>")
			: (document.querySelector('.resultText').innerHTML = '<h3>Great</h3><p>You scored higher than <span class="percentageScore">&#8734</span> of the people who have taken these tests.</p>') &&
			  (document.querySelector('.percentageScore').innerText = `${Math.floor(Math.random() * 100)}%`);
	}
};
reset.onclick = (scores) => {
  scores = [
		(document.querySelector('.reactScore').value = 0),
		(document.querySelector('.memoryScore').value = 0),
		(document.querySelector('.verbalScore').value = 0),
		(document.querySelector('.visualScore').value = 0),
	];
  for (let i = 0; i < scores.length; i++) {
		scores[i] = 0;
	}
  console.log(scores);
	document.querySelector('.sumScore').innerHTML = '&#8734';
	document.querySelector('.resultText').innerHTML = '<h3>Great</h3><p>You scored higher than <span class="percentageScore">&#8734</span> of the people who have taken these tests.</p>';
	document.querySelector('.summaryScores').reset;
};
