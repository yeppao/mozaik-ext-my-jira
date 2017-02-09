import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import config  from './config';

const client = mozaik => {

    mozaik.loadApiConfig(config);

    const buildApiRequest = (path, params) => {
        const url = config.get('jira.baseUrl');
        const authToken = config.get('jira.authToken');
        const req = request.get(`${url}${path}`);

        if (params) {
            req.query(params);
        }

        req.set('Authorization', `Basic ${authToken}`);

        return req.promise();
    };
    
    const operations = {
        search(params) {
            let parameters = {
                jql: params.jql
            };
            return buildApiRequest('/search', parameters)
                .then(res => res.body)
            ;
        }
    };

    return operations;
};

export default client;