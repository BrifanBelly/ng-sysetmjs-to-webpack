module.exports = function replace(source, options = null) {
    // get all occurence of .css from styleUrls: []
    const styleUrlsRegex = /(?<=styleUrls\s*:\s*\[("|').*)\.css(?=.*("|')])/g;

    newSource = source.replace(styleUrlsRegex, '.scss');
    console.log("\x1b[43m", newSource);
    return newSource;

}