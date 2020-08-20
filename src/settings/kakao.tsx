interface KakaoVar {
  JS_KEY?: string;
  REST_KEY?: string;
}

const kakao: KakaoVar = {
  JS_KEY: process.env.KAKAO_JS_KEY?.toString(),
  REST_KEY: process.env.KAKAO_REST_KEY?.toString(),
};

export { kakao };
