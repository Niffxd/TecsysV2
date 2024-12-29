import { Card } from "@/components/ui/card";
import style from "./ScreenCard.module.css";

export default function ScreenCard(
  {
    noImageValue,
    noTouchValue,
    lockedValue,
    onChangeNoImageValue,
    onChangeNoTouchValue,
    onChangeLockedValue,
  }: {
    noImageValue: boolean,
    noTouchValue: boolean,
    lockedValue: boolean,
    onChangeNoImageValue: (value: boolean) => void,
    onChangeNoTouchValue: (value: boolean) => void,
    onChangeLockedValue: (value: boolean) => void,
  }) {
  return (
    <div className={style.screen_card}>
      <Card className={style.screen_card_item}>
        <div className={style.screen_card_item_title}>
          <h2>Pantalla y Táctil</h2>
        </div>
        <div className={style.screen_card_item_info}>
          <p>Verifique el estado de la pantalla y la funcionalidad táctil del dispositivo.</p>
        </div>
        <div className={style.screen_card_item_form_checkboxes}>
          <label>
            <input type="checkbox" checked={noImageValue} onChange={(e) => onChangeNoImageValue(e.target.checked)} />
            <span>Sin Imagen</span>
          </label>
          <label>
            <input type="checkbox" checked={noTouchValue} onChange={(e) => onChangeNoTouchValue(e.target.checked)} />
            <span>Sin Táctil</span>
          </label>
          <label>
            <input type="checkbox" checked={lockedValue} onChange={(e) => onChangeLockedValue(e.target.checked)} />
            <span>Bloqueado</span>
          </label>
        </div>
      </Card>
    </div>
  );
}