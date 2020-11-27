import React, {useRef, useEffect} from "react"
import { useStyles } from "./style"
import  Canvas from "./src"
import CanvasDraw from "react-canvas-draw";






const CanvasImg = props => {
  const classes = useStyles()

  // const {}points =  props.canvas.perfilesLongitudinalesPositivo.points

  const canvasRef = useRef(null)
  
  useEffect(() => {

    const { perfilesLongitudinalesConcava, perfilesLongitudinalesManto, ejemploNominales  } =  props.canvas


    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Center
    ctx.translate(125, 385);
  
    
    function drawCartesianPoint(ctx, x, y, color = "#ff2626", radius = 1) {
      ctx.fillStyle = color;
      ctx.beginPath()
      ctx.arc(x, -(y), radius, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
      ctx.fill(); // Terminar trazo
    }

    if (typeof perfilesLongitudinalesConcava.points != 'undefined' ) {
      perfilesLongitudinalesConcava.points.forEach(o => {
        drawCartesianPoint(ctx, o.x, o.y, perfilesLongitudinalesConcava.brushColor, perfilesLongitudinalesConcava.brushRadius );
      })
    }


    if (typeof perfilesLongitudinalesManto.points != 'undefined' ) {
      perfilesLongitudinalesManto.points.forEach(o => {
        drawCartesianPoint(ctx, o.x, o.y, perfilesLongitudinalesManto.brushColor, perfilesLongitudinalesManto.brushRadius );
      })
    }

    if (typeof ejemploNominales.points != 'undefined' ) {
      ejemploNominales.points.forEach(o => {
        drawCartesianPoint(ctx, o.x, o.y, ejemploNominales.brushColor, ejemploNominales.brushRadius );
      })
    }
    
  

    ctx.beginPath()
    ctx.fillStyle="#737373";
    ctx.arc(33, -50, 35, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;  
    ctx.stroke();
    ctx.closePath()


    ctx.beginPath()
    ctx.font = "25px serif"
    ctx.fillStyle = "#fff"
    ctx.fillText("OSS", 10, -50)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.font = "17px serif"
    ctx.fillStyle = "#fff"
    ctx.fillText(props.OSS + ',0"', 20, -30)
    ctx.stroke()
    ctx.closePath()


  }, [])
  
  return <canvas ref={canvasRef}  width="456" height="392"/>
}

CanvasImg.propTypes = {
    
}

export { CanvasImg }
