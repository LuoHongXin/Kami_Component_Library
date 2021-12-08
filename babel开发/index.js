const parser = require('@babel/parser');

const traverse = require('@babel/traverse').default

const generate = require('@babel/generator').default

const ast = parser.parse('const a = 1'); // 转换成AST
traverse(ast, {
    // 声明变量都会触发这个VariableDeclaration函数
    VariableDeclaration(path, state) {
        // 通过 path.node 访问实际的 AST 节点
        path.node.kind = 'var'
    }
});

// 将处理好的 AST 放入 generate
const transformedCode = generate(ast).code