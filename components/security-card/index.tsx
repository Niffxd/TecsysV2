import { Card } from "@/components/ui/card";
import { Faceid, Fingerprint as TouchId, Locked } from "@/assets/icons";
import style from "./SecurityCard.module.css";

export default function SecurityCard(
  {
    authMethodValue = "faceId",
    faceIdValue,
    touchIdValue,
    onChangeAuthMethodValue,
    onChangeFaceIdValue,
    onChangeTouchIdValue,
  }: {
    authMethodValue: string,
    faceIdValue: boolean,
    touchIdValue: boolean,
    onChangeAuthMethodValue: (value: string) => void,
    onChangeFaceIdValue: (value: boolean) => void,
    onChangeTouchIdValue: (value: boolean) => void,
  }) {
  return (
    <div className={style.security_card}>
      <Card className={style.security_card_item}>
        <div className={style.security_card_item_title}>
          <h2>FaceID y Touch ID</h2>
        </div>
        <div className={style.security_card_item_info}>
          <p>Seleccione el método de autentificación y su estado actual.</p>
        </div>
        <div className={style.security_card_item_form_select}>
          { authMethodValue !== "faceId" && authMethodValue !== "touchId" && <Locked width={42} /> }
          { authMethodValue === "faceId" && <Faceid width={42} /> }
          { authMethodValue === "touchId" && <TouchId width={42} /> }
          <select onChange={(e) => onChangeAuthMethodValue(e.target.value)} value={authMethodValue}>
            <option value="faceId">Face ID</option>
            <option value="touchId">Touch ID</option>
          </select>
          {
            authMethodValue === "faceId" && <label>
              <span>Funcionando</span>
              <input type="checkbox" checked={faceIdValue} onChange={(e) => onChangeFaceIdValue(e.target.checked)} />
            </label>
          }
          {
            authMethodValue === "touchId" && <label>
              <span>Funcionando</span>
              <input type="checkbox" checked={touchIdValue} onChange={(e) => onChangeTouchIdValue(e.target.checked)} />
            </label>
          }
        </div>
      </Card>
    </div>
  );
}