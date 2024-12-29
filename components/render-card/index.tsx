import HomeCard from "../home-card";
import General from "../general-card";
import Screen from "../screen-card";
import Security from "../security-card";

import style from "./RenderCard.module.css";

export default function RenderCard({ renderOption }: { renderOption: string }) {
  return (
    <div className={style.render_card}>
      { renderOption === "home" && <HomeCard /> }
      { renderOption === "general" && <General /> }
      { renderOption === "screen" && <Screen /> }
      { renderOption === "security" && <Security /> }
    </div>
  );
}