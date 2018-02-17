const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden'});
    mainWindow.loadURL("http://localhost:1234");
    /*mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "dist/index.html"),
        protocol: 'file:',
        slashes: true
    }));*/

    mainWindow.on('closed', function() {
        app.quit();
    });
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [];

if(process.platform === 'darwin') {
    mainMenuTemplate.unshift({
        label: app.getName(),
        submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'services', submenu: []},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'}
        ]
    });
}

if(process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: 'CmdOrCtrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();

                    console.log(url.format({
                        pathname: path.join(__dirname, 'dist/index.html'),
                        protocal: 'file:',
                        slashes: true
                    }));
                    console.log("file:/"+ __dirname + "/dist/index.html");
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}