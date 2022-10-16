import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0xFc40Eb2Cbfc3622971eD1785302c61cDa96c091D");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Is it HUMAN? ACCESS",
                description: "This NFT will give you access to willDAO!",
                image: readFileSync("scripts/assets/willdao.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();