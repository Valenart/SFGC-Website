import { BaseController } from "../baseController/baseController";

export class HomeController extends BaseController {
    constructor() {
        super('https://sfgc-website-api.onrender.com');
    }

    async fetchPostsData() {
        return await this.get('/posts');
    }

}