import React from "react"
import { useStyles } from "./style"
import  Canvas from "./src"
import setting1 from "../../../assets/img/fake/setting1.png"

let img = new Image

const draw = (ctx, frameCount) => {

  img.src = setting1 

  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)

  ctx.beginPath()
  ctx.moveTo(70,20)
  ctx.lineTo(100,100)
  ctx.lineTo(110,190)
  ctx.lineTo(110,263)

  ctx.moveTo(260,20)
  ctx.lineTo(240,100)
  ctx.lineTo(210,263)
  ctx.strokeStyle = "#FF0000"
  ctx.lineCap = 'round'
  ctx.lineWidth = 2 
  ctx.lineJoin = 'round'
  ctx.stroke()
  ctx.closePath();

  ctx.beginPath()
  
  ctx.fillStyle="#737373";
  ctx.arc(150, 380, 40, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;  
  ctx.stroke();
  ctx.closePath()


  ctx.beginPath()
  ctx.font = "30px serif"
  ctx.fillStyle = "#fff"
  ctx.fillText("OSS", 122, 380)
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.font = "22px serif"
  ctx.fillStyle = "#fff"
  ctx.fillText('8,0"', 135, 400)
  ctx.stroke()
  ctx.closePath()

}

const CanvasImg = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Canvas draw={draw} />
    </React.Fragment>
  )
}

CanvasImg.propTypes = {
    
}

export { CanvasImg }
