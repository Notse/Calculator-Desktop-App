const electron = require('electron');
const url = require('url');
const path = require('path');
const shell = require('electron').shell;
const {app, BrowserWindow , Menu , dialog} = electron;


let calciApp;

app.on('ready', function(){
    calciApp = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
        calciApp.loadURL(url.format({
            pathname: path.join(__dirname, 'calciApp.html'),
            protocol:'file:',
            slashes:true
        }));

        const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
        Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label:'Exit',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label:'About',
        submenu:[
            {
                label:'Nikhil Notse',
                click(){
                    dialog.showMessageBox({
                        type: 'info',
                        buttons: [],
                        defaultId: 0,
                        icon: '',
                        title: 'Hi,',
                        message: 'My name is  Nikhil Notse. Even though I am a full stack developer But still I love doing CSS as the primary area of my interest is front-end. ',
                        detail: 'Application Published Date - 15 August 2021',
                        cancelId: 0,
                        noLink: false,
                        normalizeAccessKeys: false,
                    });
                }
            }
        ]
    }
];
