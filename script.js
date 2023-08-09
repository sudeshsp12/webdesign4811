const toggleButton = document.getElementById('toggleButton');
  const additionalInfo = document.getElementById('additionalInfo');

  toggleButton.addEventListener('click', function() {
    if (additionalInfo.style.display === 'none') {
      additionalInfo.style.display = 'block';
      toggleButton.textContent = 'Show Less';
    } else {
      additionalInfo.style.display = 'none';
      toggleButton.textContent = 'Show More';
    }
  });


    function validateForm() {
      // Get form inputs
      var email = document.getElementById("email").value;
      var feedback = document.getElementById("feedback").value;

      // Validate email address
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
      }

      // Validate feedback
      if (feedback.trim() === "") {
        alert("Please enter your feedback.");
        return false;
      }

      // Form is valid
      alert("Form submitted successfully!");
      return true;
    }
 // Add click event listeners to the navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');

      // Use the target ID to find the corresponding element
      const targetElement = document.querySelector(targetId);

      // Scroll to the element smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Add the active class to the clicked link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }

    // Get all elements with the data-tooltip attribute
const tooltips = document.querySelectorAll('[data-tooltip]');

// Attach event listeners to each tooltip element
tooltips.forEach((tooltip) => {
  tooltip.addEventListener('mouseover', showTooltip);
  tooltip.addEventListener('mouseout', hideTooltip);
});

// Event handler to show the tooltip
function showTooltip(event) {
  const tooltip = event.target.nextElementSibling;
  tooltip.style.visibility = 'visible';
}

// Event handler to hide the tooltip
function hideTooltip(event) {
  const tooltip = event.target.nextElementSibling;
  tooltip.style.visibility = 'hidden';
}
const heading = document.getElementById('myHeading');
heading.classList.add('animated');



