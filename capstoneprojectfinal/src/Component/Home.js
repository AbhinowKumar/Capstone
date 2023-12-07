import SliderComp from "./SliderComp";
import CardComp from "./CardComp";

export default function Home() {
  return (
    <>
      <div className="mb-2 home-heading">
        <h5>Welcome to online flower shopping</h5>
      </div>
      <div className="mb-2">
        <SliderComp />
      </div>
      <div className="mb-2">
        <CardComp />
      </div>
    </>
  );
}
