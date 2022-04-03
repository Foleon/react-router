import * as ReactRouter from "@foleon/react-router";
import * as ReactRouterNative from "@foleon/react-router-native";

describe("@foleon/react-router-native", () => {
  for (let key in ReactRouter) {
    it(`re-exports ${key} from react-router`, () => {
      expect(ReactRouterNative[key]).toBe(ReactRouter[key]);
    });
  }
});
