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
        
    // // Add some lines
    // ctx.beginPath();
    // ctx.moveTo(-325,0);
    // ctx.lineTo(325,0);
    // ctx.stroke();
    // ctx.moveTo(0,-325);
    // ctx.lineTo(0, 325);
    // ctx.stroke();     
    
    // ctx.font = "12px Arial";
    // ctx.fillText("+ x",180, -10);
    // ctx.fillText("- y",10, 180);
    
    // ctx.fillText("- x",-200, -10);
    // ctx.fillText("+ y",10, -180);  
    
    // // From the above I notice that -x coordinates behaves
    // as expected, but the y coordinates jumps on the '
    // wrong side of the line. 
    
    // ctx.fillRect(-100, -100, 4, 4); 
    // ctx.fillText("(-100,-100). Incorrect" ,-100, -100); 
    
    // From 'translate' this is correct, but only the x coordinate
    // looks like it should:
    // x = 200 - 100 = 100
    // y = 200 - 100 = 100
    
    // In order to draw correct cartesian coordinates we could make
    // a simple function like this 
    
    function drawCartesianPoint(ctx, x, y, color = "#ff2626", radius = 1) {
      ctx.fillStyle = color;
      ctx.beginPath()
      ctx.arc(x, -(y), radius, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
      ctx.fill(); // Terminar trazo
    }
    
    // And for text:
    // function drawCartesianText(ctx, x, y, text) {
    //     ctx.fillText(text , x, -(y));  
    // }
    
    // Draw corrext:
    perfilesLongitudinalesConcava.points.forEach(o => {
      drawCartesianPoint(ctx, o.x, o.y, perfilesLongitudinalesConcava.brushColor, perfilesLongitudinalesConcava.brushRadius );
    })

    perfilesLongitudinalesManto.points.forEach(o => {
      drawCartesianPoint(ctx, o.x, o.y, perfilesLongitudinalesManto.brushColor, perfilesLongitudinalesManto.brushRadius );
    })

    ejemploNominales.points.forEach(o => {
      drawCartesianPoint(ctx, o.x, o.y, ejemploNominales.brushColor, ejemploNominales.brushRadius );
    })
    // drawCartesianText(ctx, -100, 100, '(-100, -100) correct');

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
