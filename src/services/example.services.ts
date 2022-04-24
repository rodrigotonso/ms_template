// import { getRepository, getConnection, getManager, UpdateResult, Like, In } from 'typeorm';
// import { Example } from '../models/Example';

export class ExampleServices {
    /**
     * GET TOURNAMENT BY ID
     *
     * @static
     * @return {Promise<any | undefined>}
     * @memberof ExampleServices
     */
    public static async getExample(): Promise<any | undefined> {
        return await new Promise(resolve => {
            const example = {
                id: 1,
                description: 'example'
            }
            resolve(example)
        })
    }
}