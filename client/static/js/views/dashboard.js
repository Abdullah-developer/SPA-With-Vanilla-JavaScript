import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Dashboard')
    }

    async getHTML() {
        return `
        <div>
            <h1>Simple Applcation with Simple Features of <span class="main__color">SPA</span></h1>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci culpa perferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci culpa perferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci culpa perferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci culpa perferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci culpa perferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci culpa perferendis eos fugiat accusamus similique iure. Illo perspiciatis expedita nisi voluptas sequi. Optio voluptatum maiores in id perferendis laudantium.</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magni quam nulla alias beatae asperiores sit autem ratione delectus temporibus facere minus debitis veritatis officia accusamus eveniet et nemo impedit!</p>
            <a href="/posts" data-link>View Recent Posts</a>
        </div>
        `
    }
}