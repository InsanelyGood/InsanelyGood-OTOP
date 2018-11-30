const config = {
  local: {
    database: "mongodb://localhost:27017/otopaholicDBTest"
  },
  global: {
    database:
      "mongodb://root:insanelygood@68.183.236.161:27017/otopaholicDB?authSource=admin"
  }
};

module.exports = { ...config[process.env.NODE_ENV] };
