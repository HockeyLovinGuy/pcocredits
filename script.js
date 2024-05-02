//For use with HTML script
const getCreditsBtn = document.getElementById('get-credits-btn');
const creditsContainer = document.getElementById('credits-container');

getCreditsBtn.addEventListener('click', async () => {
  try {
    const credits = await getCredits(url);
    if (credits) {
      displayCredits(credits);
    } else {
      creditsContainer.textContent = 'Failed to retrieve credits.';
    }
  } catch (error) {
    console.error('Error fetching credits:', error);
    creditsContainer.textContent = 'Error fetching credits.';
  }
});

// Implement the getCredits and displayCredits functions as defined before
