import { useState } from 'react'
import './App.css'
import explorer from './data/data'
import Folder from './components/Folder'
import useTraverseTree from './hooks/useTraverse'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)
  // console.log(explorerData)

  const { insertNode } = useTraverseTree();
  const handleAddNode = (folderId, value, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, value, isFolder)
    setExplorerData(finalTree)
  }
  return (
    <div>
      <Folder handleAddNode={handleAddNode} explorer={explorerData} />
    </div>
  )
}

export default App
