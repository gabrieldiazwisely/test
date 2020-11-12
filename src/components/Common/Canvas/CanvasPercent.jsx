import React, {useRef, useEffect} from "react"

const CanvasPercent = props => {

  const { points } = props
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const point = 380 - (points.altura*380)/100

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const gradiente = ctx.createLinearGradient(0, 0, 0, 350);
    gradiente.addColorStop(0, "#FF0000"); // Rojo
    gradiente.addColorStop(0.7, "#FFF600"); // Amarillo
    gradiente.addColorStop(1, "#26a028"); // Verde
    ctx.beginPath();
    ctx.fillStyle = gradiente;
    ctx.rect(60, 0, 25, 380);
    
    ctx.rect(30, 0, 25, 3);
    ctx.fillText(points.max + "%", 0, 10);
    
    ctx.rect(30, point, 25, 3);
    ctx.fillText(points.altura + "%", 0, point + 5);

    ctx.rect(30, 376, 25, 3);
    ctx.fillText(points.min + "%", 0, 381);
    
    ctx.fill();

    // const max = ctx.createLinearGradient(0, 0, 0, 350);
    // max.addColorStop(0, "#FF0000"); // Rojo
    // ctx.beginPath();
    // ctx.fillStyle = max;
    // ctx.rect(30, 0, 25, 3);
    // ctx.fillText(points.max + "%", 0, 10);
    // ctx.fill();


    
    // const altura = ctx.createLinearGradient(0, 0, 0, 350);
    // altura.addColorStop(0.7, "#FFF600"); // Amarillo
    // ctx.beginPath();
    // ctx.fillStyle = altura;
    
    // ctx.fill();

    // const min = ctx.createLinearGradient(0, 0, 0, 350);
    // min.addColorStop(1, "#26a028"); // Verde
    // ctx.beginPath();
    // ctx.fillStyle = min;
    // ctx.rect(30, 376, 25, 3);
    // ctx.fillText(points.min + "%", 0, 381);
    // ctx.fill();




  }, [])
  
  return <canvas ref={canvasRef}  width="80" height="392"/>
}

CanvasPercent.propTypes = {
    
}

export { CanvasPercent }