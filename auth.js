import NextAuth from "next-auth";
import Naver from "next-auth/providers/naver";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Naver],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account) {
        // 사용자가 새로 로그인함 -> 토큰 발급
        return {
          id: user.id,
          name: profile.response.name,
          email: token.email,
          picture: token.picture,
          mobile: profile.response.mobile,
          birthday: profile.response.birthyear + "-" + profile.response.birthday,
          gender: profile.response.gender,
          nickname: profile.response.nickname,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          token_type: account.token_type,
          expires_in: account.expires_in,
          expires_at: account.expires_at,
        };
      } else if (Date.now() < token.expires_at * 1000) {
        // 토큰이 아직 유효하면 기존 토큰 리턴
        return token;
      } else {
        // 토큰이 유효하지 않을 경우

        // 리프레시 토큰이 없으면 에러 발생
        if (!token.refresh_token) throw TypeError("refresh_token이 존재하지 않음");

        // 리프레시 토큰이 있으면 access token 재발급
        try {
          const response = await fetch("https://nid.naver.com/oauth2.0/token", {
            method: "POST",
            body: new URLSearchParams({
              grant_type: "refresh_token",
              client_id: process.env.AUTH_NAVER_ID,
              client_secret: process.env.AUTH_NAVER_SECRET,
              refresh_token: token.refresh_token,
            }),
          });

          const tokensOrError = await response.json();

          if (!response.ok) throw tokensOrError;

          const newTokens = tokensOrError;

          token.access_token = newTokens.access_token;
          token.expires_at = Math.floor(Date.now() / 1000 + newTokens.expires_in);

          if (newTokens.refresh_token) token.refresh_token = newTokens.refresh_token;

          return token;
        } catch (error) {
          console.error("access_token 발급 실패", error);
          token.error = "RefreshTokenError";
          return token;
        }
      }
    },
    async session({ session, token }) {
      session.error = token.error;
      session.user.id = token.id;
      return session;
    },
    async authorized({ auth }) {
      return !!auth;
    },
  },
});
