const modal = document.getElementById('cookie-modal');
const acceptBtn = document.getElementById('accept-cookies');
const declineBtn = document.getElementById('decline-cookies');

console.log('Script is running');

if (typeof Storage !== 'undefined') {
  console.log('localStorage is available.');
} else {
  console.log('localStorage is NOT available.');
}

if (!localStorage.getItem('cookiesChoice')) {
  console.log('Cookies not accepted yet. Showing banner after 2 seconds.');

  setTimeout(() => {
    modal.style.display = 'flex';
  }, 2000);
} else {
  console.log('Cookies already accepted or declined.');
}

function hideBanner() {
  console.log('Hiding banner and saving choice.');
  localStorage.setItem('cookiesChoice', 'true');
  console.log('CookiesChoice saved:', localStorage.getItem('cookiesChoice'));

  modal.style.display = 'none';
}

acceptBtn.addEventListener('click', hideBanner);
declineBtn.addEventListener('click', hideBanner);
