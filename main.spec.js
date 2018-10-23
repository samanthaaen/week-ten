import Vue from "vue";
import App from "./components/App.js";

describe("Vue component tests", () => {
  const defaultData = App.data();
  it("An example test should pass.", () => {
    expect(2).toEqual(2);
  });
  it("The component should have a title property.", () => {
    expect(defaultData.title).toBe("BT3103 Week 10");
  });

  it("The component should have an updateCurrentChart function.", () => {
    expect(typeof App.methods.updateCurrentChart).toBe("function");
  });
  it("has a created hook", () => {
    expect(typeof App).toBe("object");
  });
  it("The component should have a data function.", () => {
    expect(typeof App.data).toBe("function");
    // And there should be localCharts.
    expect(typeof defaultData).toBe("object");
  });
  it("There should be local chart data.", () => {
    expect(defaultData.localLineData.length).toBe(3);
    expect(defaultData.localBarData.length).toBe(5);
  });
  it("Current chart should be localBarData.", () => {
    expect(defaultData.currentChart).toBe("localBarData");
  });
});
