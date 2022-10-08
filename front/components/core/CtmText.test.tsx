import CtmText from "./CtmText";
import renderer from "react-test-renderer";

describe("render custom text component", () => {
  it("should render the CtmText Component", () => {
    const component = renderer.create(
      <CtmText type="MontserratBold">TEST</CtmText>
    );
    const componentJSON = component.toJSON() as any;
    expect(componentJSON).toMatchSnapshot();
  });
});
