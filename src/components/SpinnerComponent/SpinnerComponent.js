import { LeapFrog } from "@uiball/loaders";

const SpinnerComponent = () => {
  <LeapFrog size={40} speed={2.5} color="black" />;

  return (
    <div class="leap-frog">
      <div class="leap-frog__dot"></div>
      <div class="leap-frog__dot"></div>
      <div class="leap-frog__dot"></div>
    </div>
  );
};

export default SpinnerComponent;
