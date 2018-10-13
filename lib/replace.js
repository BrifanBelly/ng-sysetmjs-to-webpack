module.exports = function replace(source, options = null) {
    const styleUrlsRegex = /(?<=styleUrls\s*:\s*\[("|').*)\.css(?=.*("|')])/g;

    newSource = source.replace(styleUrlsRegex, '.scss');
    console.log("\x1b[43m", newSource);
    return newSource;

}