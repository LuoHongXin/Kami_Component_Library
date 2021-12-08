module.exports = (api, options, dirname) => {
    return {
        visitor: {
            VariableDeclaration(path, state) {
                path.node.kind = 'var'
            }
        }
    }
}