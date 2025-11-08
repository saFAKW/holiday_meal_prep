import {getTotalNutrition, updateNutritionFacts} from "./scripts/nutrition_api"
import { show_recipe } from "./scripts/get_recipe"

//giveFunctionToButton()

/*
(async () => {
  const totals = await getTotalNutrition("100g eggs, 500ml milk", 2);
  updateNutritionFacts(totals);
})();
*/
show_recipe();