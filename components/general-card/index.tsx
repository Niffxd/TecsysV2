import { Card } from "@/components/ui/card";
import style from "./GeneralCard.module.css";

export default function GeneralCard(
  {
    pinValue,
    turnOnValue,
    wetValue,
    onChangePinValue,
    onChangeTurnOnValue,
    onChangeWetValue,
  }: {
    pinValue: string,
    turnOnValue: boolean,
    wetValue: boolean,
    onChangePinValue: (value: string) => void,
    onChangeTurnOnValue: (value: boolean) => void,
    onChangeWetValue: (value: boolean) => void,
  }) {
  return (
    <div className={style.general_card}>
      <Card className={style.general_card_item}>
        <div className={style.general_card_item_title}>
          <h2>Identificación del Dispositivo</h2>
        </div>
        <div className={style.general_card_item_info}>
          <p>Ingrese la información básica del iPhone para comenzar el diagnóstico.</p>
        </div>
        <div className={style.general_card_item_form}>
          <label>
            <span>PIN</span>
            <input type="text" value={pinValue} onChange={(e) => onChangePinValue(e.target.value)} />
          </label>
        </div>
        <div className={style.general_card_item_form_checkboxes}>
          <label>
            <span>Encendido</span>
            <input type="checkbox" checked={turnOnValue} onChange={(e) => onChangeTurnOnValue(e.target.checked)} />
          </label>
          <label>
            <span>Mojado</span>
            <input type="checkbox" checked={wetValue} onChange={(e) => onChangeWetValue(e.target.checked)} />
          </label>
        </div>
      </Card>
    </div>
  );
}