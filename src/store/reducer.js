import { MainApi } from '@/api/main/main';
import { AuthApi } from '@/api/auth/auth';
import { CommunityApi } from '@/api/community/community';

// ==============================|| COMBINE REDUCER ||============================== //

const Reducer = {
    [MainApi.reducerPath]: MainApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [CommunityApi.reducerPath]: CommunityApi.reducer,
};

export default Reducer;
