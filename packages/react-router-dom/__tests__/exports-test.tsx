import * as ReactRouter from "@foleon/react-router";
import * as ReactRouterDOM from "@foleon/react-router-dom";

describe("@foleon/react-router-dom", () => {
  for (let key in ReactRouter) {
    it(`re-exports ${key} from react-router`, () => {
      expect(ReactRouterDOM[key]).toBe(ReactRouter[key]);
    });
  }
});
