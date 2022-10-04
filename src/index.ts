import { Engine } from "json-rules-engine";
import * as rules from "./data/rules.json";

// product.brand=Heartbrand&product.tags=multicountry

const engine = new Engine([
  {
    conditions: {
      all: [
        {
          fact: "input",
          operator: "equal",
          value: "Heartbrand",
          path: "$.product.brand",
        },
      ],
    },
    event: {
      type: "match",
    },
  },
]);

engine
  .run({
    input: {
      product: {
        brand: "Heartbrand",
      },
    },
  })
  .then(({ events }) => console.log(events));
