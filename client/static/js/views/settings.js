import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Settings')
    }

    async getHTML() {
        return `
        <div>
            <h1>Settings</h1>
            <p>Change Your Privacy and configration</p>
        </div>
        `
    }
}