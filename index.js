const { parse, generate, walk } = require('abstract-syntax-tree');

module.exports = function(content) {
    const tree = parse(content);
    walk(tree, (node, parent) => {
        if (node.type === 'Identifier' && node.name === 'ma') {
            console.log(parent)
        }
        // console.log("parent", parent);
    })
    return generate(tree);
}