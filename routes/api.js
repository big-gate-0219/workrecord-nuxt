export const ROUTES = {
    GET: {      
        MY_WORKRECORD: '/api/work-records',
        MY_GROUPS: '/api/groups',
        GROUP_USERS: 'api/groups/:group_id',
        GROUP_USERS_WORKRECORD: 'api/work-records/groups/:group_id/today'
    },
    POST: {
        LOGIN: '/api/accounts/signin',
        SIGN_UP: `/api/accounts/signup`,
        START_WORK: '/api/work-records/today/start',
        END_WORK: '/api/work-records/today/end',
    }
};

export default ROUTES;
