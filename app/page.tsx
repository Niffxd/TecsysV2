import MainCardContainer from "@/components/main-card-container";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.app_container}>
      <MainCardContainer />
    </div>
  );
}
