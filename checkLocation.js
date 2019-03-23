const fs = require("fs");

const pairReg = /([\w_]+)\s*=/;

function storeKey(relativePath) {
    let content = fs.readFileSync(__dirname + "/" + relativePath, "utf-8");
    let keyArr = [];
    content.split('\n').forEach((line, index, arr) => {
        if (index === arr.length - 1 && line === "") {
            return;
        }
        // console.info(line);
        let res = pairReg.exec(line);
        if (res) {
            keyArr.push(res[1])

        }
    });
    return keyArr;
}


function main() {
    let a = storeKey("1.lua");
    let b = storeKey("Localization.lua");
    let unused = [];
    a.forEach(key1 => {
        for (let i = 0; i < b.length; i++) {
            if (key1 === b[i]) {
                return;
            }
        }
        unused.push(key1);

    });
    console.info(unused);

}


main();

