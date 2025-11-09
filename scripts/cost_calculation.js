const costs = require('./costs.json');

function parseIngredientString(ingredientStr) {
  return ingredientStr.split(",").map(item => {
    // Match number, optional space, optional unit, then ingredient name (preserve spaces)
    const match = item.trim().match(/^([\d.]+)\s*([a-zA-Z]+)?\s*(.+)$/);
    if (!match) return null;
    const [, amount, unit, name] = match;
    return { 
      amount: parseFloat(amount), 
      unit: unit ? unit.toLowerCase() : null, 
      name: name.trim() // preserve spaces
    };
  }).filter(Boolean);
}

function convertUnit(amount, fromUnit, toUnit) {
  if (!fromUnit || !toUnit) return null;
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();

  if (fromUnit === toUnit) return amount;
  if ((fromUnit === "ml" && toUnit === "g") || (fromUnit === "g" && toUnit === "ml")) {
    return amount; // rough approximation
  }
  return null; // unknown conversion
}

function calculateTotalCost(ingredientStr) {
    console.log(ingredientStr)
  const ingredients = parseIngredientString(ingredientStr);
  let totalCost = 0;

  for (const ing of ingredients) {
    // Find first entry in costs that includes the ingredient name (case-insensitive)
    let costEntry = Object.entries(costs).find(
      ([key]) => key.toLowerCase().includes(ing.name.toLowerCase())
    );
    if (costEntry) costEntry = costEntry[1];
    else {
        costEntry = costs["Default"]; // fallback
    }

    let amountInCostUnit = ing.amount;
    if (ing.unit && costEntry.unit) {
      const converted = convertUnit(ing.amount, ing.unit, costEntry.unit);
      if (converted !== null) amountInCostUnit = converted;
      else { // unit not identifiable, set £1
        totalCost += 1;
        continue;
      }
    } else if (!ing.unit) { // missing unit, set £1
      totalCost += 1;
      continue;
    }

    const cost = (amountInCostUnit / costEntry.per) * costEntry.price;
    totalCost += cost;
  }

  return parseFloat(totalCost.toFixed(2));
}

function CostPerPerson(ingredientStr, portions){
    return parseFloat((calculateTotalCost(ingredientStr)/portions).toFixed(2))
}

function calculateTime(str) {
  const count = (str.match(/,/g) || []).length;
  return count * 6;
}

// Example usage:
// const total = calculateTotalCost("100g Milk, 50 g Eggs, 50 g Goat Milk, 20 ml Pistachios");
// console.log(total);

export {calculateTotalCost, CostPerPerson, calculateTime}