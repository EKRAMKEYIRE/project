const heading = document.getElementById('heading');
const toggleButton = document.getElementById('toggle');
function handleToggle() {
    
    if (heading.textContent === "OFF") {
        
        heading.textContent = "ON";
        heading.style.color = "#28a745"; 
    } else {
       
        heading.textContent = "OFF";
        heading.style.color = "#fd3c07ff"; 
    }
}
toggleButton.addEventListener('click', handleToggle);