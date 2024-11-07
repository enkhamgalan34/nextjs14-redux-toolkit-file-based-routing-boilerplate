import { MainApi } from '@/api/main/main';
import { AuthApi } from '@/api/auth/auth';
import { CommunityApi } from '@/api/community/community';

export const Middlewares = [
    MainApi.middleware,
    AuthApi.middleware,
    CommunityApi.middleware,
];
