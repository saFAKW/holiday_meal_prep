//event listeners
// Close sheet when clicking outside
document.addEventListener('click', function(event) {
    const sheet = document.getElementById('ingredientsSheet');
    const toggleBtn = document.querySelector('.toggle-btn');
            
    if (sheet.classList.contains('open') && 
        !sheet.contains(event.target) && 
        !toggleBtn.contains(event.target)) {                
        sheet.classList.remove('open');
        }
        });

//written functions
function toggleSheet() {
        const sheet = document.getElementById('ingredientsSheet');
    sheet.classList.toggle('open');
    }
