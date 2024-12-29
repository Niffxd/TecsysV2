import Logo from "@/assets/icons/logo.svg";

import style from "./HomeCard.module.css";

export default function HomeCard() {
  return (
    <div className={style.home_card}>
      <Logo />
      <h1 className={style.title_card}>TecSys</h1>
      <p className={style.paragraph_card}>&quot;Con TecSys, simplificamos el diagnóstico de tu iPhone en segundos y garantiza un servicio transparente y eficiente&quot;</p>
    </div>
  );
}