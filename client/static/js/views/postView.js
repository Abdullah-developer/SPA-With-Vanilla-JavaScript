import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle(`Post ${this.params.id}`)
    }

    async getHTML() {
        return `
        <div>
            <h1>Viewing the Post</h1>
            <p>this is post with id ${this.params.id}</p>
        </div>
        `
    }
}