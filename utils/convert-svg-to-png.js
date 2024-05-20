const fs = require('fs');
const svg2img = require('svg2img');

export async function convertSvgToPng(svgFilePath, pngFilePath, callback) {
    const svgData = fs.readFileSync(svgFilePath, 'utf-8');

    svg2img(svgData, function(error, buffer) {
        if (error) {
            console.error('Error converting SVG to PNG:', error);
            callback(error);
            return;
        }

        fs.writeFile(pngFilePath, buffer, function(err) {
            if (err) {
                console.error('Error saving PNG file:', err);
                callback(err);
                return;
            }

            console.log('PNG file saved successfully:', pngFilePath);
            callback(null, pngFilePath);
        });
    });
}
