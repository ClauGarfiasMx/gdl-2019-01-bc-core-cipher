const tellMeMore = document.getElementById('explanation1Bttn');
	tellMeMore.addEventListener('click'	, () => {
	const explanationScreen1Hide = document.querySelector('#explanation1Screen');
	explanationScreen1Hide.style.display = 'none';
	const explanationScreen2 = document.querySelector('#explanation2Screen');
	explanationScreen2.style.display = 'block';
});

const findOut = document.getElementById('explanation2Bttn');
	findOut.addEventListener('click'	, () => {
	const explanationScreen2Hide = document.querySelector('#explanation2Screen');
	explanationScreen2Hide.style.display = 'none';
	const explanationScreen3Show = document.querySelector('#explanation3Screen');
	explanationScreen3Show.style.display = 'block';
});

const startApp = document.getElementById('startApp');
	startApp.addEventListener('click'	, () => {
	location.replace('app.html');
});
