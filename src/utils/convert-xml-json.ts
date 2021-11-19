import { xml2json } from "./xml-to-json";

export function parseXml(xml: string) {
    var dom: Document | null = null;
    if (window.DOMParser) {
        try {
            dom = new DOMParser().parseFromString(xml, "text/xml");
        } catch (e) {
            dom = null;
        }
    }
    return new Promise(resolve => {
        const obj = xml2json(dom);
        resolve(obj);
    });
}
