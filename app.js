const app = Vue.createApp({
  data() {
    return {
      enterTask: "",
      tasks: [],
      isShow: true,
    };
  },
  computed: {
    renderCaption() {
      return this.isShow ? "Show" : "Hide";
    },
    renderTaskList() {
      return this.isShow;
    },
  },
  methods: {
    addTask() {
      if (this.enterTask) {
        this.tasks.push(this.enterTask);
        this.enterTask = "";
      }
    },
    reRender() {
      this.isShow = !this.isShow;
    },
  },
});

app.mount("#assignment");
