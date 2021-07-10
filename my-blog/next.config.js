module.exports = {
  reactStrictMode: true,
  // URL끝이 항상 /로 끝나게 true, 없는걸 더 선호 할땐 false
  trailingSlash: false,
  env: {
    SANITY_PROJECT_ID: "cmdkygyu",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
