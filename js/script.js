const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Generare 10 mail con API",
      mail:"https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },

  methods: {
    getmail() {
      axios.get(this.mail).then((result) => {
        console.log(result);
      });
    },
  },
}).mount("#app");
