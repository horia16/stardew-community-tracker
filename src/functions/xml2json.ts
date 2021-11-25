export function xml2json(node: Node) {
  // Create the return object
  let obj: string | Record<string, any> | null = {};
  if (node.nodeType == 1) {
    const attributes = (node as any).attributes as any;
    if (attributes?.length > 0) {
      obj["_attributes"] = {};
      for (let j = 0; j < attributes.length; j++) {
        let attribute = attributes.item(j);
        obj["_attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (node.nodeType == 3) {
    obj = node.nodeValue;
  }
  if (node.hasChildNodes() && typeof obj != "string" && obj) {
    for (let i = 0; i < node.childNodes.length; i++) {
      const item = node.childNodes.item(i);
      const nodeName = item.nodeName;
      // Check if it is a text node
      if (nodeName === "#text") {
        if (!isNaN(Number(item.nodeValue))) {
          return Number(item.nodeValue);
        }
        if (item.nodeValue === "false") return false;
        if (item.nodeValue === "true") return true;
        return item.nodeValue;
      }
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xml2json(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          let old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xml2json(item));
      }
    }
  }
  return obj;
}

export function parseXmlString(xml: string) {
  if (window.DOMParser) {
    try {
      return xml2json(new DOMParser().parseFromString(xml, "text/xml"));
    } catch (e) {
      return null;
    }
  }
}
