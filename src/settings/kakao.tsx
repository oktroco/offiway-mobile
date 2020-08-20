interface KakaoVar {
  JS_KEY: string;
  REST_KEY: string;
}

const kakao = {
  JS_KEY: process.env.KAKAO_JS_KEY,
  REST_KEY: process.env.KAKAO_REST_KEY,
};

export { kakao };
