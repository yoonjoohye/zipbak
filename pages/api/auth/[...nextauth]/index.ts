import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options={
    providers: [
        {
            id: 'kakao',
            name: 'KakaoProvider',
            type: 'oauth',
            version: '2.0',
            scope: 'age_range birthday account_email talk_message gender profile',
            state: false,
            params: {grant_type: 'authorization_code'},
            redirectUri:'https://api-dev.zipbak.site/auth/kakao',
            accessTokenUrl: 'https://kauth.kakao.com/oauth/token',
            requestTokenUrl: 'https://kauth.kakao.com/oauth/authorize',
            authorizationUrl: 'https://kauth.kakao.com/oauth/authorize?response_type=code',
            profile: async (profile: any) => {
                return ({
                    id: profile.id,
                    name: profile.properties.nickname,
                    email: profile?.kakao_account?.email,
                    image: profile.kakao_account.profile.profile_image_url,
                });
            },
            clientId: '8c54568c29068d3f73659380519787f1',
        },
    ],
}

export default function nextAuth(req:any, res:any){
    return NextAuth(req, res, options);
};
