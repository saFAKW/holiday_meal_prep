const ED_apikey = "44058cdda3c9b47d8199476afe630d5b"
const ED_appid = "f4dac682"
const ED_apikey2 = "62b677ce52ffdbd9df71f795cd290513"
const ED_appid2 = "a86a5d3b"
const ED_apikey3 = "35b4e7731ad11d8057ac13f071a3bb65"
const ED_appid3 = "dce4808c"
const ED_apikey4 = "92d5475bcf17d4340a538aa770b2f206"
const ED_appid4 = "7db14b31"
const ED_apikey5 = "b6f6357af10e5776a5af294dd86fcda3"
const ED_appid5 = "cb2758a4"
const ED_apikey6 = "cf5b3d027dbef78e31bce528632c9def"
const ED_appid6 = "2c951abb"

async function getNutritionFacts(ingredient) {
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${ED_appid}&app_key=${ED_apikey}&nutrition-type=cooking&ingr=${encodeURIComponent(ingredient)}`;

  const response = await fetch(url);
  const data = await response.json();

  // Defensive parsing
  const parsed = data.ingredients?.[0]?.parsed?.[0];
  if (!parsed || !parsed.nutrients) {
    console.log("No nutrient data found for:", ingredient);
    return null;
  }

  const nutrients = parsed.nutrients;

  return {
    calories: nutrients.ENERC_KCAL?.quantity || 0,
    totalFat: nutrients.FAT?.quantity || 0,
    saturatedFat: nutrients.FASAT?.quantity || 0,
    transFat: nutrients.FATRN?.quantity || 0,
    cholesterol: nutrients.CHOLE?.quantity || 0,
    sodium: nutrients.NA?.quantity || 0,
    totalCarbs: nutrients.CHOCDF?.quantity || 0,
    sugars: nutrients.SUGAR?.quantity || 0,
    protein: nutrients.PROCNT?.quantity || 0,
  };
}


// Aggregate totals from multiple ingredients
async function getTotalNutrition(ingredientsStr, portions) {
  const ingredients = ingredientsStr.split(",").map(i => i.trim()).filter(Boolean);

  const total = {
    calories: 0,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    totalCarbs: 0,
    sugars: 0,
    protein: 0,
  };

  for (const item of ingredients) {
    const facts = await getNutritionFacts(item);
    if (facts) {
      for (const key in total) {
        total[key] += facts[key] || 0;
      }
    }
  }

  // Round to 1 decimal for sanity
  for (const key in total) {
    total[key] = Math.round(total[key] * 10) / 10 / portions;
  }

  return total;
}
function updateNutritionFacts(nutrition) {
  const nf = document.getElementById("nutrition-facts");

  const dailyMax = {
    totalFat: 78,         // g
    saturatedFat: 20,     // g
    cholesterol: 300,     // mg
    sodium: 2300,         // mg
    totalCarbs: 275,      // g
    protein: 50,          // g
    calories: 2000        // kcal baseline
  };

  const daily = {
    totalFat: (nutrition.totalFat / dailyMax.totalFat) * 100,
    saturatedFat: (nutrition.saturatedFat / dailyMax.saturatedFat) * 100,
    cholesterol: (nutrition.cholesterol / dailyMax.cholesterol) * 100,
    sodium: (nutrition.sodium / dailyMax.sodium) * 100,
    totalCarbs: (nutrition.totalCarbs / dailyMax.totalCarbs) * 100,
    protein: (nutrition.protein / dailyMax.protein) * 100
  };

  const format = (val, unit = "") => `${Math.round(val)}${unit}`;
  const dailyFormat = val => `${Math.round(val)}%`;

  // Calories
  nf.querySelector(".calories .value").textContent = format(nutrition.calories);

  // Total Fat
  const fatLine = nf.querySelector(".total-fat");
  if (fatLine) {
    fatLine.querySelector(".value").textContent = format(nutrition.totalFat, "g");
    fatLine.querySelector(".daily").textContent = dailyFormat(daily.totalFat);
  }

  // Saturated Fat
  const satFat = nf.querySelector(".sat-fat");
  if (satFat) {
    satFat.querySelector(".value").textContent = format(nutrition.saturatedFat, "g");
    satFat.querySelector(".daily").textContent = dailyFormat(daily.saturatedFat);
  }

  // Trans Fat
  const transFat = nf.querySelector(".trans-fat");
  if (transFat) {
    transFat.querySelector(".value").textContent = format(nutrition.transFat, "g");
  }

  // Cholesterol
  const chol = nf.querySelector(".cholesterol");
  if (chol) {
    chol.querySelector(".value").textContent = format(nutrition.cholesterol, "mg");
    chol.querySelector(".daily").textContent = dailyFormat(daily.cholesterol);
  }

  // Sodium
  const sodium = nf.querySelector(".sodium");
  if (sodium) {
    sodium.querySelector(".value").textContent = format(nutrition.sodium, "mg");
    sodium.querySelector(".daily").textContent = dailyFormat(daily.sodium);
  }

  // Total Carbs
  const carbs = nf.querySelector(".carbs");
  if (carbs) {
    carbs.querySelector(".value").textContent = format(nutrition.totalCarbs, "g");
    carbs.querySelector(".daily").textContent = dailyFormat(daily.totalCarbs);
  }

  // Sugars
  const sugar = nf.querySelector(".sugars");
  if (sugar) {
    sugar.querySelector(".value").textContent = format(nutrition.sugars, "g");
  }

  // Protein
  const protein = nf.querySelector(".protein");
  if (protein) {
    protein.querySelector(".value").textContent = format(nutrition.protein, "g");
    const dailyEl = protein.querySelector(".daily");
    if (dailyEl) dailyEl.textContent = dailyFormat(daily.protein);
  }
}

/* Example
(async () => {
  const totals = await getTotalNutrition("100g eggs, 500ml milk", 2);
  updateNutritionFacts(totals);
})();
*/


export {getTotalNutrition, updateNutritionFacts}