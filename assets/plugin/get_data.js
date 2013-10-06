document.getElementsByAttribute = Element.prototype.getElementsByAttribute = function(attr) {
    var nodeList = this.getElementsByTagName('*'),
        nodeArray = [],
        i,
        elem;

    for (i = 0; elem = nodeList[i]; i++) {
        if (elem.getAttribute(attr)) {
            nodeArray.push(elem);
        }
    }

    return nodeArray;
};