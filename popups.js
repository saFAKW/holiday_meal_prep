british_cuisine = [
    "Full English Breakfast",
    "Eggs Benedict",
    "Beans on Toast",
    "Porridge",
    "Kippers",
    "Black Pudding",
    "Crumpets",
    "Bacon Sandwich (Bacon Butty)",
    "Bubble and Squeak",
    "Smoked Salmon & Scrambled Eggs",
    "Ploughman’s Lunch",
    "Fish and Chips",
    "Cornish Pasty",
    "Scotch Egg",
    "Sausage Roll",
    "Welsh Rarebit",
    "Jacket Potato",
    "Chicken and Leek Pie",
    "Cottage Pie",
    "Prawn Cocktail",
    "Roast Beef and Yorkshire Pudding",
    "Shepherd’s Pie",
    "Beef Wellington",
    "Toad in the Hole",
    "Lamb Shank with Mint Sauce",
    "Steak and Ale Pie",
    "Bangers and Mash",
    "Chicken Tikka Masala",
    "Fish Pie",
    "Eton Mess",
    "Sticky Toffee Pudding",
    "Bread and Butter Pudding",
    "Trifle",
    "Victoria Sponge Cake",
    "Bakewell Tart",
    "Spotted Dick",
    "Apple Crumble",
    "Banoffee Pie",
    "Treacle Tart",
    "Scones with Clotted Cream and Jam"
]
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

