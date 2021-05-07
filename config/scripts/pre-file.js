const judgeFolder = (pathStr) => {  //判断是否存在文件夹，若无则建
  if (!fs.existsSync(resolvePath(pathStr))) {
    fs.mkdirSync(resolvePath(pathStr))
  };
}

const buildFile = () => {   
  const aimPath = resolvePath('../../dist/server/index.js');
  if (!fs.existsSync(aimPath)) {    //判断是否存在文件

    judgeFolder('../../dist');
    judgeFolder('../../dist/server');

    fs.writeFileSync(aimPath, "console.log('build done')");
  }
};

buildFile();