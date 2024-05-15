const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Generare 10 mail con API",
      mail_api: 'https://flynn.boolean.careers/exercises/api/random/mail',
    };
  },

  methods: {
    getmail() {
      axios.get(this.mail_api).then((result) => {
        console.log(this.mail_api);
      });
    },
  },
}).mount("#app");
