const replace = require('./replace');

function processChunk (source, map) {
    // for future if options are enabled  .....getOptionsArray(this)
    const optionsArray =  null;

    let newSource = replace(source, optionsArray)

    this.callback(null, newSource, map)
    return;
}

module.exports = processChunk;