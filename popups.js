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

function makeMap(){
    var location = {lat: 25.0330, lng: 121.5654};
    var map  = new google.map.Map(document.getElementById("map-container"),
    {zoom: 4, center: location});
}

var image = document.getElementById("food");
image.onmouseover = function(){
    document.getElementById("nutrition-facts").style.display = "block";
    element.classList.add('show');
}
image.onmouseout = function(){
    document.getElementById("nutrition-facts").style.display = "none";
}