// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "cvPxQa7hLg1VVvOiTzDZx0RdM",
    TWITTER_CONSUMER_SECRET: "y6K3Ay4MCxdOWBFooK2ntJ8kGQggu9mI6YYRIF1AEiX9SFJeBA",
    TWITTER_ACCESS_TOKEN: "182951688-BdThKA0G4oJ35uHNGiC36G5NV2TBrCmhKKAoUl9P",
    TWITTER_TOKEN_SECRET: "FUmbj7gtyVimSOR63520coracEmRvv1OXBMpsNQi72bFL"
  };
  
  const DB_USER = "admin";
  const DB_PASSWORD = "iOmvDDZRoLyiWtkt@cluster";
  const MONGODB = {
    MONGODB_URI: "mongodb+srv://admin:iOmvDDZRoLyiWtkt@cluster0.uw0yk.gcp.mongodb.net/aptreact?retryWrites=true&w=majority"
  };

  const GOOGLE_STORAGE = {
    GOOGLE_STORAGE_JSON: "./aptreactstorage-52385ce6c45e.json"
  }
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION,
    ...GOOGLE_STORAGE
  };
  
  // module.exports = KEYS;
  export default KEYS;