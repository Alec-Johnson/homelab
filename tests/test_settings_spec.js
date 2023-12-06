// BEGIN: Test settings.json
describe("settings.json", () => {  
  it("should have dockercompose property", () => {
    const settings = {
      dockercompose: true,
    };

    expect(settings.dockercompose).toBeTruthy();
  });
});
// END: Test settings.json