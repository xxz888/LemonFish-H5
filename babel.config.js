
const plugins = [];
if (['production', 'prod'].includes(process.env.NODE_ENV)) {
 plugins.push("transform-remove-console")
}


module.exports = {
  presets: [
    [
     '@vue/app',
     {
      useBuiltIns: 'entry',
      polyfills: [
       'es6.promise',
       'es6.symbol',
      ],
     },
    ],
   ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      "vant"
    ],
    ["@babel/plugin-syntax-dynamic-import"]
  ]
};
