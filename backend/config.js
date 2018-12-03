const config = {
  FRONTEND_URL: {
    global: "http://178.128.111.203:3000",
    local: "http://localhost:3000"
  },
  local: {
    database: "mongodb://localhost:27017/otopaholicDBTest"
  },
  global: {
    database:
      "mongodb://178.128.111.203:27017/otopaholicDB?authSource=admin"
  }
};

module.exports = { ...config[process.env.NODE_ENV] };
