#!/usr/bin/env node
import fs from 'fs';
// import spawn from 'cross-spawn';
import { directories } from './static/directories';
import { clearConsole } from './utils/clearConsole';



clearConsole();

// check if our directories are setup
console.log('\nChecking directories...\n'); // eslint-disable-line no-console

directories.forEach(directory => {
    try {
        fs.lstatSync(directory.path).isDirectory();
        console.log(`   ${directory.name}: ✅`); // eslint-disable-line no-console
    } catch (e) {
        console.log(`   ${directory.name}: ❌`); // eslint-disable-line no-console
        try {
            fs.mkdirSync(directory.path);
            console.log('       created directory! ✅ '); // eslint-disable-line no-console
        } catch (e) {
            console.log('       failed creating ', directory.name); // eslint-disable-line no-console
        }
    }
})

console.log('\nDirectory check complete! Running mac setup...'); // eslint-disable-line no-console
