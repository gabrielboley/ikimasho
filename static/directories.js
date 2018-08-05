const $HOME_DIR = require('os').homedir();

export const directories = [
    {
        name: 'screenshots',
        path: `${$HOME_DIR}/Pictures/screenshots`
    },
    {
        name: 'wallpaper',
        path: `${$HOME_DIR}/Pictures/wallpapers`
    },
    {
        name: 'root',
        path: `${$HOME_DIR}/Root`
    },
    {
        name: 'dev',
        path: `${$HOME_DIR}/Root/dev`
    },
    {
        name: 'tzero',
        path: `${$HOME_DIR}/Root/tzero`
    },
    {
        name: 'macScripts',
        path: `${$HOME_DIR}/.mac_scripts`
    },
];
