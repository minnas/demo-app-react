import { createRef, ReactElement, useState } from "react";
import { usePaintStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme, paintColors } from "@Components/styles/theme";
import Button from "@Components/tools/Button";
import {
  faArrowsRotate,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import Toast from "@Components/tools/Toast";
import Accordion, { ListItem } from "@Components/tools/DropDown";

const FakePaint = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = usePaintStyles(theme);
  const colors = paintColors;
  const [color, setColor] = useState(colors.at(0));
  const [draw, setDraw] = useState(false);
  const [canvasW, setCanvasW] = useState(500);
  const [toastVisible, setToastVisible] = useState(false);
  const [lineWidth, setLineWidth] = useState(2);
  const [disabled, setDisabled] = useState(false);
  const canvasRef = createRef<HTMLCanvasElement>();
  let prevX: any = undefined;
  let prevY: any = undefined;

  const drawLine = (e: any) => {
    const canvas = canvasRef?.current;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvas) {
      return;
    }
    if (prevX == undefined || prevY == undefined || !draw) {
      prevX = e.clientX - canvas?.offsetLeft;
      prevY = e.clientY - canvas?.offsetTop;
      return;
    }
    let currentX = e.clientX - canvas.offsetLeft;
    let currentY = e.clientY - canvas.offsetTop;
    ctx.strokeStyle = color || "#000";
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
  };
  const clear = () => {
    const canvas = canvasRef?.current;
    const ctx = canvasRef.current?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDisabled(false);
  };

  const save = () => {
    if (!canvasRef?.current) {
      return;
    }
    setToastVisible(true);
    const link = document.createElement("a");
    link.setAttribute("download", "drawing.png");
    link.setAttribute("href", canvasRef?.current.toDataURL("image/png"));
    link.click();
    link.remove();
    setTimeout(() => {
      setToastVisible(false);
    }, 500);
  };
  const lineWidths = [...Array(10).keys()]
    .filter((w: number) => w > 1)
    .map(
      (w: number) =>
        ({
          value: w,
          label: w.toString(),
          callback: () => {
            setLineWidth(w);
          },
        } as ListItem)
    );

  return (
    <div className={styles.wrapper}>
      {toastVisible ? <Toast message="Saved" /> : ""}
      <div className={styles.tools}>
        {colors.map((c: string, key: number) => (
          <span
            key={key}
            className={styles.color}
            style={{
              backgroundColor: c,
              borderWidth: c === color ? "4px" : "2px",
            }}
            onClick={() => setColor(c)}
          ></span>
        ))}
        <Accordion items={lineWidths} selected={lineWidth.toString()} />
        <Button icon={faArrowsRotate} onClick={clear} />
        <Button icon={faFloppyDisk} onClick={save} />
      </div>
      <canvas
        className={styles.canvas}
        width={canvasW}
        height={(canvasW / 500) * 300}
        onMouseDown={() => {
          setDraw(true);
          setDisabled(true);
        }}
        onMouseUp={() => setDraw(false)}
        onMouseMove={(event) => drawLine(event)}
        ref={canvasRef}
      />
      <div className={styles.sizeTools}>
        <input
          className={styles.range}
          type="range"
          min="500"
          max="1000"
          disabled={disabled}
          onChange={(event: any) =>
            setCanvasW((event?.target?.value as number) || 500)
          }
        />
        <span className={styles.size}>
          Size: {canvasW} X {(canvasW / 500) * 300}
        </span>
      </div>
    </div>
  );
};

export default FakePaint;
