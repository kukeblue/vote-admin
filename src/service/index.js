

import {request} from '../utils/request'

class Service {
    async doLogin({}) {
        return await request('/api/auth/login', {})
    }
}

export default new Service()