export const ROUTES = {
    GET: {
        ACCOUNTS: '/api/accounts',
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
        REGISTER_NEW_GROUP: '/api/groups',
        ADD_MEMBER_TO_GROUP: '/api/groups/:group_id/add-member',
    }
};

export default ROUTES;
