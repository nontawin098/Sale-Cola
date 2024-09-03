function toggleMenu(){
	const hamburger = document.querySelector('.toggle');
	const menuToggle = document.querySelector('.navbar');

	hamburger.classList.toggle('active');
	menuToggle.classList.toggle('active');
}