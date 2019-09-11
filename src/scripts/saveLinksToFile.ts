import { DdLink } from "../models/ddLink.model";
import * as fs from 'fs';

export class SaveLinksToFile {
    async writeJSON(data: DdLink[], path: string, name: string): Promise<any> {
        return new Promise<boolean>(async (resolve, reject) => {
            const dataToWrite = {
                links: data
            };

            await fs.writeFile(`${path}/${name}`, JSON.stringify(dataToWrite, null, 2), (er) => {
                if(er){
                    reject(er)
                }
                resolve()
            });
        });

    }
}