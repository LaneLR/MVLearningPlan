import RenderImage from "./components/imgServerComponent";
import UpdateNumber from "./components/UpdateNumber";
import ChangeArrowDirection from "./components/RotateArrow";
import ChangeTextWords from "./components/ChangeTextReducer";


export default function Home() {

  return (
    <>
    {/* <RenderImage /> */}
    <ChangeArrowDirection />
    <UpdateNumber />
    <br />
    <ChangeTextWords />
    </>
  );
}
