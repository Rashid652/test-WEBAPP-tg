const app = {
  data() {
    return {
      btns: [
        { btn_title: 'Основные', btn_url: '#' },
        { btn_title: 'Модерация', btn_url: '#' },
        { btn_title: 'Триггеры и пресеты', btn_url: '#' },
        { btn_title: 'Журнал действий', btn_url: '#' },
      ],
      color: window.Telegram.WebApp.colorScheme
    }
  },
}

Vue.createApp(app).mount('#app')