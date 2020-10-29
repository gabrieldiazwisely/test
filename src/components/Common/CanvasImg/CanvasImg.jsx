import React from "react"
import { useStyles } from "./style"
import CanvasDraw from "react-canvas-draw";


const CanvasImg = props => {
  const classes = useStyles()
  const drawingProps = {
      lines: [
        props.canvas.perfilesLongitudinalesExample,
        props.canvas.nominalesExample
      ],
      width: 585,
      height: 500
  }

  return (
    <React.Fragment>
      <div className={classes.canvasContent}>
        <CanvasDraw
          disabled
          hideGrid
          immediateLoading = {true}
          saveData={JSON.stringify(drawingProps)}
          canvasWidth= {585}
          canvasHeight= {500}
        />
      </div>
    </React.Fragment>
  )
}

CanvasImg.propTypes = {
    
}

export { CanvasImg }
