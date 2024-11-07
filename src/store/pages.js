const Pages = {
    //COMMON
    MAIN: '/', //메인페이지   

    LOGIN: '/login', //로그인
    LOGOUT: '/logout',
    ERROR: '/error', //로그인

    ABOUT: '/about',

    MY_PROJECT: "/my/projects",

    // COSTUMER SERVICE
    COMMUNITY_NOTICE: '/community/notice',
    COMMUNITY_NOTICE_DETAIL: '/community/notice/:code',

    COMMUNITY_FAQ: '/community/faq',

    COMMUNITY_QNA: '/community/qna',
    COMMUNITY_QNA_CREATE: '/community/qna/create',
    COMMUNITY_QNA_DETAIL: '/community/qna/:code',

    COMMUNITY_REVIEW: '/community/review',
    COMMUNITY_REVIEW_DETAIL: '/community/review/:code',
    COMMUNITY_REVIEW_CREATE: '/community/review/create',
};

export default Pages;