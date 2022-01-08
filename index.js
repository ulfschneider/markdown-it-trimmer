function trimmer(md) {
    md.renderer.origRender = md.renderer.render;

    function listAdjuster(html) {
        const LI_OPEN = new RegExp('<li>\\s+', 'ig');
        const LI_CLOSE = new RegExp('\\s+</li>', 'ig');

        html = html.replace(LI_OPEN, '<li>');
        html = html.replace(LI_CLOSE, '</li>');

        return html;
    }

    md.renderer.render = function(tokens, idx, options) {
        let html = md.renderer.origRender(tokens, idx, options);
        return listAdjuster(html);
    }

}


module.exports = trimmer;