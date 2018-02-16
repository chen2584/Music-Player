import React from 'react';
import ReactHowler from 'react-howler'
import './css/App.css';

const path = require('path');
const url = require('url');
const fs = window.require('fs');
const electron = window.require('electron');
const remote = electron.remote;
export default class MainPage extends React.PureComponent {

    constructor() {
        super();
        this.showErrorDialog = this.showErrorDialog.bind(this);
        this.showName = this.showName.bind(this);
        //this.Chen = this.Chen.bind(this);
    }

    showName = (name) => e => {
        //alert(name);

        fs.readFile(this.musicURL, 'base64', function (err, data) {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }
            return <ReactHowler src="http://goldfirestudios.com/proj/howlerjs/sound.ogg" playing={true} onPlay={() => alert("666")}/>
        });
    }

    showErrorDialog = () => {
        //alert("123");
        remote.dialog.showErrorBox("Title", "Error Content");
    }
    musicURL = path.join(__dirname, "../music.mp3");
    
    render() {
        console.log(this.musicURL);
        return (
            <dir>
                สวัสดี ที่นี่หน้า MainPage
                <button onClick={this.showErrorDialog}>Show Error Dialog</button>
                <button onClick={this.showName("Chen")}>Show Name</button>
                <div className="bgColor">สวัสดี</div>
                <div className="bgColor2">สวัสดี</div>
                <div>Rose are <span style={{ color: 'red' }}>red</span>. Violet are <span style={{ color: 'blue'}}>blue</span></div>
            </dir>
        );
    }
}