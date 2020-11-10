import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Post')
    }

    async getHTML() {
        return `
        <div>
            <h1>Posts And News</h1>
            <div>Lorem ipsum, dolor sit amet consectetur adipferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.</div>
            <div>Lorem asperiores sit autem ratione delectus temporibus facere minus debitis veritatis officia accusamus eveniet et nemo impedit!</div>
        </div>
        `
    }
}