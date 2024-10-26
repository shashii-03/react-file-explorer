import React, { useState } from 'react'
import '../App'
const Folder = ({ handleAddNode, explorer }) => {
    const [expand, setExpand] = useState(false)
    const [addNew, setAddNew] = useState({
        visible: false,
        isFolder: null
    })
    const [inputData, setInputData] = useState("")
    const [exploredData, setExplorerData] = useState(explorer)

    const handleButtonClick = (e, isFolder) => {
        e.stopPropagation();
        setAddNew({
            visible: !addNew.visible,
            isFolder: isFolder
        })
    }
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }
    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleAddNode(exploredData.id, e.target.value, addNew.isFolder)
            setAddNew({ ...addNew, visible: false })
        }
    }


    console.log(explorer)
    if (exploredData.isFolder) {
        return (
            <div style={{ fontSize: "30px" }}>
                <div className='folder' onClick={() => setExpand(!expand)}>🗂️ {explorer.name}
                    <div>
                        <button onClick={(e) => handleButtonClick(e, true)} className='addButton'>Folder+</button>
                        <button onClick={(e) => handleButtonClick(e, false)} className='addButton'>File+</button>
                    </div>
                </div>
                <div style={{
                    marginLeft: "20px"
                }}>
                    {
                        addNew.visible && (
                            <span>
                                {addNew.isFolder ? "🗂️ " : "📄 "}
                                <input
                                    onKeyDown={(e) => onAddFolder(e)}
                                    onChange={(e) => handleInputChange(e)} type='text' autoFocus onBlur={() => setAddNew({ ...addNew, visible: false })} >
                                </input>
                            </span>
                        )
                    }
                    {
                        exploredData.items.map(exp => (
                            <div className='files' key={exp.id} style={{
                                display: expand ? "block" : "none",

                            }} >
                                <Folder handleAddNode={handleAddNode} explorer={exp} key={exp.id} />
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    } else {
        return <div>
            📄 {explorer.name}
        </div>
    }
}

export default Folder