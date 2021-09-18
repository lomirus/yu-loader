const { parse, generate } = require('abstract-syntax-tree');

module.exports = function(content) {
    const ast = parse(content);
    return generate(ast);
}