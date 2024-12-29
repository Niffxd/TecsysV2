import { Card } from "@/components/ui/card";
import style from "./GeneralCard.module.css";

export default function GeneralCard() {
  return (
    <div className={style.general_card}>
      <Card className={style.general_card_item}>
        <h1>Identificación del Dispositivo</h1>
      </Card>
    </div>
  );
}