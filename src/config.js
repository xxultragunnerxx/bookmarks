module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  API_TOKEN: process.env.API_TOKEN || "97aca904-1431-461d-afce-3a379efa7af5",
  DB_URL: process.env.DB_URL || "postgresql://postgres:penguin1@localhost/bookmarks"
};
