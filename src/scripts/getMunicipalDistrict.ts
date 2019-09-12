// import * as request from "request-promise-native";
import * as puppeteer from 'puppeteer';

export function getMunicipalDistric(municipalityId: string, uri: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            page.setUserAgent(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
            );
            await page.goto(uri);
            await page.waitForNavigation();

            //Colect dd ids
            const ddIds = await page.evaluate(async () => {
                const ddElements = await document.querySelectorAll('input[name="DD"]');

                var ddValues = [];
                ddElements.forEach(d => {
                    ddValues.push(d.getAttribute("value"));
                });
                return ddValues;
            });

            //Collect dd names
            const ddNames = await page.evaluate(async () => {
                const ddElements = await document.querySelectorAll(
                    'td[class="checktext"]'
                );

                var ddValues = [];
                ddElements.forEach(d => {
                    ddValues.push(d.innerHTML);
                });
                return ddValues;
            });

            const newDdNames = ddNames.splice(1);

            //Combine dd ids with dd names

            const dataset = [];

            ddIds.forEach((ddId, i) => {
                dataset.push({
                    id: ddId,
                    name: newDdNames[i]
                });
            });

            const newData = {
                municipality_id: municipalityId,
                municipal_districts: dataset
            };

            await browser.close();
            resolve(newData);
        } catch (error) {
            reject(error);
        }
    });
}