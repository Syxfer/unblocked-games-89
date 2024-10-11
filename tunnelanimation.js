// Get the elements you want to animate
const tunnelElements = document.querySelectorAll('.tunnel-element');

// Add event listeners to each element
tunnelElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    // Add the "hover-effect" class to the element
    element.classList.add('hover-effect');
  });

  element.addEventListener('mouseout', () => {
    // Remove the "hover-effect" class from the element
    element.classList.remove('hover-effect');
  });
});