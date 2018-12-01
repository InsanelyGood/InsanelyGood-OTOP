const LOCAL = "http://localhost:8000";
const SERVE = "http://68.183.236.161:8000";
export const BACKEND = process.env.REACT_APP_BACKEND === "local" ? LOCAL : SERVE;
