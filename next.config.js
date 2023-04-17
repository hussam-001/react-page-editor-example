/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@hussam-001/editor",
  "@hussam-001/plugins-slate",
]);

module.exports = withTM({});
