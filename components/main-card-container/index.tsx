'use client';

import { useState } from "react";

import { Card } from "@/components/ui/card";
import RenderCard from "@/components/render-card";

import * as icons from "@/assets/icons";

import style from "./MainCardContainer.module.css";

export default function MainCardContainer() {
  const [render, setRender] = useState("home");

  const items = [
    {
      title: "General",
      icon: <icons.Dots width={50} height={30} color="var(--color-black)"/>,
      description: "Información básica sobre el modelo",
      onclick: () => setRender("general"),
    },
    {
      title: "Pantalla",
      icon: <icons.Screen width={50} height={30} color="var(--color-black)"/>,
      description: "Estado de la pantalla, incluyendo posibles daños y funcionalidad táctil",
      onclick: () => setRender("screen"),
    },
    {
      title: "Seguridad",
      icon: <icons.Locked width={50} height={30} color="var(--color-black)"/>,
      description: "Estado de Face ID, Touch ID y configuración de bloqueo.",
      onclick: () => setRender("security"),
    },
    {
      title: "Batería",
      icon: <icons.BatteryFull width={50} height={30} color="var(--color-black)"/>,
      description: "Evaluación del rendimiento de la batería, ciclos de carga y capacidad máxima restante.",
      onclick: () => setRender("battery"),
    },
    {
      title: "Conecciones",
      icon: <icons.Wifi width={50} height={30} color="var(--color-black)"/>,
      description: "Revisión de la funcionalidad de las conexiones inalámbricas, como Wi-Fi, Bluetooth y datos móviles.",
      onclick: () => setRender("connections"),
    },
    {
      title: "Sensores",
      icon: <icons.SensorProx width={50} height={30} color="var(--color-black)"/>,
      description: "Comprobación de sensores como el giroscopio, acelerómetro, proximidad y brújula.",
      onclick: () => setRender("sensors"),
    },
    {
      title: "Sonido",
      icon: <icons.Sound width={50} height={30} color="var(--color-black)"/>,
      description: "Pruebas del micrófono, altavoces y calidad de sonido para llamadas o reproducción de audio.",
      onclick: () => setRender("sound"),
    },
    {
      title: "Cámara",
      icon: <icons.Camera width={50} height={30} color="var(--color-black)"/>,
      description: "Inspección de las cámaras del dispositivo, incluyendo enfoque, calidad de imagen y flash.",
      onclick: () => setRender("camera"),
    },
    {
      title: "Puerto",
      icon: <icons.Port width={50} height={30} color="var(--color-black)"/>,
      description: "Verificación del estado y funcionalidad del puerto de carga y sincronización.",
      onclick: () => setRender("port"),
    },
  ]

  return (
    <Card className={style.card}>
      <Card className={style.side_bar}>
        {
          items.map((item, index) => (
            <Card key={index} className={style.side_bar_item} onClick={item.onclick}>
              {item.icon}
              <div className={style.item_title}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Card>
          ))
        }
      </Card>
      <div className={style.actual_content}>
        <RenderCard renderOption={render}/>
      </div>
    </Card>
  );
}
