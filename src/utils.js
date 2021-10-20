const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileConent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team.html', fileConent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'Team Page Created'
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./templates/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }
        })
    })
}

module.exports ={writeFile, copyFile};