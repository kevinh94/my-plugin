module.exports = {
  install(Vue, options) {
    Vue.filter("capitalize", function(value) {
      return value.toUpperCase();
    });
    console.log(options);
  },
};
