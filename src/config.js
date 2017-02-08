
const config = convict({
    jira: {
        baseUrl: {
            doc: 'The JIRA API base url',
            default: '',
            format: String,
            env: 'JIRA_BASE_URL'
        },
        authToken: {
            doc: 'The basic authentication token',
            default: null,
            format: String,
            env: 'JIRA_BASIC_AUTH_TOKEN'
        }
    }
});

export default config;