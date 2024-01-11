import styles from './index.module.css'


const Toolbox = () =>{

    const updateBrushSize = (e) =>{

    }
    return(
        <div style={styles.toolboxContainer}>
            <div  style={styles.toolItem}>
                <h4  style={styles.toolText}>Stroke Color</h4>
                <div style={styles.itemContainer}>
                    <div style={styles.colorBox}/>
                </div>
            </div>
            <div  style={styles.toolItem}>
                <h4 style={styles.toolText}>Brush Size</h4>
                <div style={styles.itemContainer}>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize}/>
                </div>
            </div>
        </div>
    )
}

export default Toolbox;