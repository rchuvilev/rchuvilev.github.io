const fs = require('fs');
const path = require('path');
const toBuild = {
    // './src/utils/cdn/HtmlFlux.ts': './public/cdn/',
    './src/utils/cdn/HtmlFluxKyc.ts': './public/cdn/',
};
Object.values(toBuild).forEach((targetDir: string) => fs.existsSync(targetDir) && fs.rmdirSync(targetDir, {recursive: true}));
Object.keys(toBuild).forEach(async (filePath) => {
    const parsedPath = path.parse(filePath);
    const fileNameNoExt = parsedPath.name;
    const fileDest = toBuild[filePath] + fileNameNoExt + '.js';
    const proc = Bun.spawn([
        ...(`bun build ${filePath} --outfile=${fileDest} --target=browser --minify`).split(' ')
    ]);
    await proc.exited; // resolves when process exit
    proc.killed; // boolean — was the process killed?
    proc.exitCode; // null | number
    proc.signalCode; // null | "SIGABRT" | "SIGALRM" | ...
    if (proc.exitCode !== 0 && fs.existsSync(fileDest)) {
        fs.rmSync(fileDest);
    }
    const procGit = Bun.spawn([
        ...(`git add ${fileDest}`).split(' ')
    ]);
    await procGit;
})
