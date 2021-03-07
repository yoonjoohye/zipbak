export const getBaseUrl=()=> {
    if (process.env.NODE_ENV === 'production') {
        return 'https://api.zipbak.site';

    } else {
        return 'https://api-local.zipbak.site';
    }
};
