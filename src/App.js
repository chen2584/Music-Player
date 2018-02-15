import React from 'react';
import './css/App.css';

const electron = window.require('electron');
const remote = electron.remote;
export default class MainPage extends React.Component {
    constructor() {
        super();
        this.showErrorDialog = this.showErrorDialog.bind(this);
        this.showName = this.showName.bind(this);

    }

    showName = (name) => e => {
        alert(name);
    }

    showErrorDialog() {
        console.log(electron.remote.dialog);
        //alert("123");
        remote.dialog.showErrorBox("Title", "Error Content");
    }
    render() {
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