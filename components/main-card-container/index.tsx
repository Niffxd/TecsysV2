// import Image from "next/image";

import { Card } from "@/components/ui/card";
import HomeCard from "../home-card";

// import logo from "@/assets/icons/logo.svg";

import style from "./MainCardContainer.module.css";

export default function MainCardContainer() {
  return (
    <Card className={style.card}>
      <Card className={style.side_bar}>
      </Card>
      <div className={style.actual_content}>
        <HomeCard />
      </div>
    </Card>
  );
}
