import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

//マッチする場合はauth.config.tsのauthConfigを返す
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  //静的ファイルやapiフォルダーには適用しない
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
