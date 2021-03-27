import Vue from 'vue';
Vue.component('ButtonString', {
  template: '<button @click="handleClick">Clicked ButtonString {{ count }} times</button>',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
});

Vue.component('ButtonXTemplate', {
  template: '#button-x-template',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
});

Vue.component('ButtonInline', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
});

Vue.component('ButtonRender', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
  render(createElement) {
    return createElement(
      'button',
      {
        on: {
          click: () => this.count++
        },
      },
      [
        `Click ButtonRender ${this.count} times`
      ]
    );
  },
});

Vue.component('ButtonJSX', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
  render() {
    return (
      <button onClick={this.handleClick}>
        Click ButtonJSX {this.count} times
      </button>
    )
  }
});