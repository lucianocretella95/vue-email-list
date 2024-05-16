const { createApp } = Vue;

createApp({
  data() {
    return {
      // usare THIS !!!!!!!
      message: "Generare 10 mail con API",
      mail: "https://flynn.boolean.careers/exercises/api/random/mail",
      newmail: [],
    };
  },

  methods: {
    getmail() {
      this.newmail = []
      for (let i = 0; i < 10; i++) {
        axios.get(this.mail).then((result) => {
          console.log(result.data.response);
          this.newmail.push(result.data.response);
        });
      }
    },
  },
  mounted() {
    console.log("app caricata");
    // this.getmail();
  },
}).mount("#app");
