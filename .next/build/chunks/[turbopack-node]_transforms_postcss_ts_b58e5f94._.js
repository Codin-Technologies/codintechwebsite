module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/codintech/codintechwebsite/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/07662__pnpm_2e3ef48a._.js",
  "chunks/[root-of-the-server]__dad62903._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/codintech/codintechwebsite/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];