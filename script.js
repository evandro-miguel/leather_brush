document.addEventListener('DOMContentLoaded', () => {
    // --- Get Elements ---
    const instagramButton = document.getElementById('instagramButton');
    const artstationButton = document.getElementById('artstationButton');
    const confirmCheckbox = document.getElementById('confirmFollow');
    const downloadButton = document.getElementById('downloadButton');

    // --- Central State Management Function ---
    const syncUI = () => {
        // 1. Get the current state from localStorage
        const isInstagramUnlocked = localStorage.getItem('instagramUnlocked') === 'true';
        const isArtstationUnlocked = localStorage.getItem('artstationUnlocked') === 'true';
        const isConfirmed = confirmCheckbox.checked;

        // 2. Update Instagram Button UI
        if (isInstagramUnlocked) {
            instagramButton.classList.add('unlocked');
        } else {
            instagramButton.classList.remove('unlocked');
        }

        // 3. Update ArtStation Button UI
        if (isArtstationUnlocked) {
            artstationButton.classList.add('unlocked');
        } else {
            artstationButton.classList.remove('unlocked');
        }

        // 4. Determine if the final download button should be shown
        if (isInstagramUnlocked && isArtstationUnlocked && isConfirmed) {
            downloadButton.style.display = 'flex';
        } else {
            downloadButton.style.display = 'none';
        }
    };

    // --- Event Listeners ---

    // When Instagram button is clicked, set its state to unlocked and update UI
    instagramButton.addEventListener('click', () => {
        localStorage.setItem('instagramUnlocked', 'true');
        syncUI();
    });

    // When ArtStation button is clicked, set its state to unlocked and update UI
    artstationButton.addEventListener('click', () => {
        localStorage.setItem('artstationUnlocked', 'true');
        syncUI();
    });

    // When the checkbox is changed, check conditions
    confirmCheckbox.addEventListener('change', () => {
        const isInstagramUnlocked = localStorage.getItem('instagramUnlocked') === 'true';
        const isArtstationUnlocked = localStorage.getItem('artstationUnlocked') === 'true';

        // If user tries to confirm without unlocking both...
        if (confirmCheckbox.checked && (!isInstagramUnlocked || !isArtstationUnlocked)) {
            alert("Why didn't you follow me? It's free content 😢");
            confirmCheckbox.checked = false; // Instantly revert the checkbox
        }

        syncUI(); // Always update the UI after a change
    });

    // --- Initial Load ---
    // On page load, always start with the checkbox unchecked
    confirmCheckbox.checked = false;
    // Call syncUI() once to set the initial state of the page based on localStorage
    syncUI();
});