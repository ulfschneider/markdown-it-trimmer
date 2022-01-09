function trimmer(md) {
    md.renderer.origRenderToken = md.renderer.renderToken;

    function listAdjuster(html) {
        const LI_OPEN = new RegExp('<li>\\s+', 'ig');
        return html.replace(LI_OPEN, '<li>');
    }

    md.renderer.renderToken = function(tokens, idx, options) {
        let token = tokens[idx];
        let result = md.renderer.origRenderToken(tokens, idx, options);

        //will remove any whitespace (incl. newlines)
        //after an opening <li> tag
        if (token.type == 'list_item_open') {
            return listAdjuster(result);
        } else {
            return result;
        }
    }
}


module.exports = trimmer;