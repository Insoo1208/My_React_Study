import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer(prop) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>Visible</button>
      <button onClick={() => setIsVisible(false)}>Invisible</button>

      <button onClick={() => isVisible ? setIsVisible(false) : setIsVisible(true)}>toggle Visibility</button>

      {isVisible && <EffectSummary />}
    </div>
  );
}

export default EffectContainer;