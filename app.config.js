import "dotenv/config";

export default {
  expo: {
    name: "PecesRioParana",
    slug: "PecesRioParana",
    version: "1.0.6",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      softwareKeyboardLayoutMode: "pan",
      package: "com.rodrigoodz.pecesParana",
      permissions: [],
      versionCode: 7,
      config: {
        googleMobileAdsAppId: process.env.REACT_APP_googleMobileAdsAppId,
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,
      admobUnitID: process.env.REACT_APP_admobUnitID,
    },
  },
};
