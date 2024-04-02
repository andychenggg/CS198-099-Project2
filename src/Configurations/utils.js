import fs from 'fs';
import path from 'path';
const fnJSON = 'filenames.json';
const IMG_TYPE = 'images'
const VIDEO_TYPE = 'videos'
const fileDir = (type, subDir) => {
    return path.join(process.cwd(), '..', '..', 'public', type, subDir);
};

const getImages = (type, subDir) => {
    const imagesDirectory = fileDir(type, subDir)

// 读取目录中的文件名
    const filenames = fs.readdirSync(imagesDirectory);

// 将文件名映射为可访问路径
    return filenames.filter(fn => !fn.endsWith(".json")).map(filename => `/images/events/${filename}`)
};

const writeDirToJSON = (strArr, type, subDir) => {
    fs.writeFile(
        path.join(fileDir(type, subDir), fnJSON),
        JSON.stringify(strArr, null, 4),
        (err) => {
        if (err) {
            console.error('error:', err);
        } else {
            console.log('success');
        }
    });
};

// RUN AFTER UPDATE THE IMAGE

writeDirToJSON(getImages(IMG_TYPE, 'events'), IMG_TYPE, 'events')
