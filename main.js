import {getTotalNutrition, updateNutritionFacts} from "./scripts/nutrition_api"
import { show_recipe } from "./scripts/get_recipe"
import { calculateTotalCost } from "./scripts/cost_calculation";

const total = calculateTotalCost("100ml Milk, 50 g Eggs, 50 ml Goat Milk, 100 g Pistachios");
console.log(total);

//giveFunctionToButton()

/*
(async () => {
  const totals = await getTotalNutrition("100g eggs, 500ml milk", 2);
  updateNutritionFacts(totals);
})();
*/
show_recipe();