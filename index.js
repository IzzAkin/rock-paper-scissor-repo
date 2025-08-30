/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ****/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // Write your code here
  // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

// Step 1: Add your query for the submit RSVP button here

// ✅ Step 1-B: Refactored to accept the person object
const addParticipant = (person) => {
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${person.name} from ${person.hometown} has RSVP'd.`;

  const participantList = document.querySelector(".rsvp-participants");
  participantList.appendChild(newParticipant);
};

// ✅ Step 1-A: Validate form and use the person object
const validateForm = () => {
  let containsErrors = false;

  const rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value,        // accesses and saves value of first input
    hometown: rsvpInputs[1].value,    // second input
    email: rsvpInputs[2].value        // third input
    // add more properties here if needed
  };

  // Step 2: Loop through inputs and check basic length validity
  for (let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];

    // Skip non-inputs
    if (input.tagName !== "INPUT") continue;

    if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

    // ✅ Extra: check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(person.email)) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }

  // If no errors, pass person to addParticipant
  if (!containsErrors) {
    addParticipant(person);
    toggleModal(person); // ✅ Triggers the modal after successful RSVP
  }
};

// Step 4: Swap old listener for the new one
const rsvpButton = document.querySelector("#rsvp-button");
rsvpButton.removeEventListener("click", addParticipant);
rsvpButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***

Purpose:
- Use this starter code to add a pop-up modal to your website.
*/
let rotateFactor = 0;
let intervalId = null;  // <— so we can clear it on close
let modalImage = null;  // will be selected when modal opens

const animateImage = () => {
  rotateFactor = rotateFactor === 0 ? -10 : 0;
  if (modalImage) modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

const hideModal = () => {
  const modal = document.getElementById("success-modal");
  modal.style.display = "none";
  if (intervalId) { clearInterval(intervalId); intervalId = null; }
};

const toggleModal = (person) => {
  const modal = document.getElementById("success-modal");
  const modalText = document.getElementById("modal-text");

  // show overlay
  modal.style.display = "flex";

  // personalize text
  modalText.textContent = `🎉 Thanks for RSVPing, ${person.name}! We can't wait to see you at the event.`;

  // (re)select image after modal is in DOM
  modalImage = modal.querySelector("img");

  // start animation
  intervalId = setInterval(animateImage, 500);

  // auto-hide after 5s
  setTimeout(hideModal, 5000);
};

// close button
document.getElementById("close-modal").addEventListener("click", hideModal);



/*** Form Handling ***
*/

// Step 1: Add your query for the submit RSVP button here

// Step 3: Add a click event listener to the submit RSVP button here
