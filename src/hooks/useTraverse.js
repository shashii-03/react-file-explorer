const useTraverseTree = () => {
    function insertNode(tree, folderId, value, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: value,
                isFolder: isFolder,
                items: [],
            })
            return tree
        }
        let latestNode = [];
        latestNode = tree.items.map(obj => (
            insertNode(obj, folderId, value, isFolder)
        ))
        return { ...tree, items: latestNode }

    }
    return { insertNode }
}


export default useTraverseTree;