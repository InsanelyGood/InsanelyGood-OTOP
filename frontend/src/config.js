const LOCAL = "http://localhost:8000";
const SERVE = "http://178.128.111.203:8000";
export const BACKEND = process.env.REACT_APP_BACKEND === "local" ? LOCAL : SERVE;
