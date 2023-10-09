const gulp = require("gulp");
const fs = require("fs");
const prodEnv = require("./src/environments/prod");
const devEnv = require("./src/environments/dev");
const uatEnv = require("./src/environments/uat");

async function createEnv(envContent) {
  const env = `module.exports.secret=${JSON.stringify(
    envContent,
    null,
    2
  )};`;

  fs.writeFileSync("env.js", env, function (err) {
    if (err) throw err;
  });
}

gulp.task("default", () => createEnv(devEnv));
gulp.task("prod", () => createEnv(prodEnv));
gulp.task("uat", () => createEnv(uatEnv));
