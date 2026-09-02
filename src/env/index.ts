

let baseUrl = "http://localhost:3000";

let baseStaticUrl = "http://47.108.160.253:59000/low-code-file-test";

if (import.meta.env.MODE == "test") {
   baseUrl = "http://localhost:3000";

} else if (import.meta.env.MODE == "prod") {
   baseUrl = "http://localhost:3000";
}

export { baseUrl, baseStaticUrl };
