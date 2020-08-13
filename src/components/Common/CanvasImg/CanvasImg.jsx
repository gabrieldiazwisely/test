import React from "react"
import { useStyles } from "./style"
import  Canvas from "./src"
import setting1 from "../../../assets/img/fake/setting1.png"

let img = new Image

const draw = (ctx, frameCount) => {

  
  img.src = setting1 

  // ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)

  ctx.beginPath()
  ctx.moveTo(0,5)
  ctx.lineTo(100,100)
  ctx.lineTo(0,263)
  ctx.moveTo(200,5)
  ctx.lineTo(150,100)
  ctx.lineTo(210,263)
  ctx.stroke() 
  ctx.strokeStyle = "#FF0000"
  ctx.lineCap = 'round'
  ctx.lineWidth = 2 
  ctx.lineJoin = 'round'
  ctx.closePath();

  ctx.beginPath()
  ctx.arc(125, 260, 25, 0, Math.PI * 2, false);
  ctx.strokeStyle = "skyblue";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath()
}

const CanvasImg = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Canvas draw={draw} width={400} height={400}/>
    </React.Fragment>
  )
}

CanvasImg.propTypes = {
    
}

export { CanvasImg }
