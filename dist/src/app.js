"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const saveLinksToFile_js_1 = require("./scripts/saveLinksToFile.js");
const perf_hooks_1 = require("perf_hooks");
class App {
    bootstrapApp() {
        return __awaiter(this, void 0, void 0, function* () {
            const startDt = perf_hooks_1.performance.now();
            console.log('App started...\n');
            yield this.createLinksFile();
            const endDt = perf_hooks_1.performance.now();
            const duration = endDt - startDt;
            console.log(`Done! Total time: ${duration}ms.\nProcess exit.`);
            yield process.exit(0);
        });
    }
    createLinksFile() {
        return __awaiter(this, void 0, void 0, function* () {
            let relationships;
            relationships = JSON.parse(JSON.stringify(data));
            const connections = relationships.connections;
            let links;
            //Generate municipal district links
            const municipalDistrictLink = new generateDdLinks_js_1.MunicipalDistrictLink();
            links = municipalDistrictLink.generateLinks(connections);
            console.log('Total links generated: ', links.length);
            const saveLinksToFile = new saveLinksToFile_js_1.SaveLinksToFile();
            yield saveLinksToFile.writeJSON(links, 'data/', 'links.json').then(() => {
                console.log('File was created successfully!\n');
            }).catch(error => {
                console.log('File was not created successfully!\n\n', error);
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map