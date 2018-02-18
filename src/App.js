import React from 'react';
import './css/App.css';

const path = require('path');
const url = require('url');
const electron = window.require('electron');
const remote = electron.remote;
export default class MainPage extends React.PureComponent {

    constructor() {
        super();
        this.showErrorDialog = this.showErrorDialog.bind(this);
        this.showName = this.showName.bind(this);
    }

    showName = (name) => e => {
        //alert(name);        
        
    }

    showErrorDialog = () => {
        //alert("123");
        remote.dialog.showErrorBox("Title", "Error Content");
    }


    musicURL = url.format({
        pathname: path.join(__dirname, "../music.mp3"),
        protocal: "file:",
        slashes: false
    });
    //player = new Player("./music.mp3");
    
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