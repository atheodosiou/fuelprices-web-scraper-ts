"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data = __importStar(require("../data/connections.json"));
const generateDdLinks_js_1 = require("./scripts/generateDdLinks.js");
class App {
    bootstrapApp() {
        console.log('App started...\n');
        let relationships;
        relationships = JSON.parse(JSON.stringify(data));
        const connections = relationships.connections;
        let links;
        //Generate municipal district links
        const municipalDistrictLink = new generateDdLinks_js_1.MunicipalDistrictLink();
        links = municipalDistrictLink.generateLinks(connections);
        console.log('Links created!\nTotal: ', links.length);
        links.forEach(l => {
            console.log(l.url);
        });
        // console.log(connections.length);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map