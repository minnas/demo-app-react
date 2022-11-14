import { createRef, ReactElement, useState } from "react";
import { usePaintStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme, paintColors } from "@Components/styles/theme";
import Button from "@Components/tools/Button";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const FakePaint = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = usePaintStyles(theme);
  const colors = paintColors;
  const [color, setColor] = useState(colors.at(0));
  const [draw, setDraw] = useState(false);
  const [lineWidth, setLineWidth] = useState(2);
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
  };
  const selectLineWidth = (e: any) => {
    if (!e.target) {
      return;
    }
    setLineWidth(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
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
        <Button icon={faArrowsRotate} onClick={clear} />
        <input
          className={styles.select}
          type="number"
          min="2"
          step="1"
          max="10"
          value="2"
          onInput={selectLineWidth}
        />
      </div>
      <canvas
        className={styles.canvas}
        width="500"
        height="300"
        onMouseDown={() => setDraw(true)}
        onMouseUp={() => setDraw(false)}
        onMouseMove={(event) => drawLine(event)}
        ref={canvasRef}
      />
    </div>
  );
};

export default FakePaint;
