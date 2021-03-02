const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//coutOnly Made without reading step-by-step exercise
const countOnly = function(allItems, itemsToCount) {
  let totalCount = {};
  
  for (const item in itemsToCount) { // iterate itemsToCount object
    if (itemsToCount[item]) { // if item property is false skips and doesn't count
      for (const elem of allItems) { // iterate allItems array
        if (elem === item) { // item found in allItems

          if (totalCount[item] === undefined) {
            totalCount[item] = 1;
          } else {
            totalCount[item] += 1;
          }

        }
      }
    }
  }

  return totalCount;
};

//countOnly2 Made following closer to exercise
const countOnly2 = function(allItems, itemsToCount) {
  let totalCount = {};
  for (const item of allItems) {

    if (itemsToCount[item]) {

      if (totalCount[item]) {
        totalCount[item] += 1;
      } else {
        totalCount[item] = 1;
      }

    }

  }

  return totalCount;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",  
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
const result2 = countOnly2(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

assertEqual(result2["Jason"], 1);
assertEqual(result2["Karima"], undefined);
assertEqual(result2["Fang"], 2);
assertEqual(result2["Agouhanna"], undefined);