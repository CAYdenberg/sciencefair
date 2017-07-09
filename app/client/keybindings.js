const Mousetrap = require('mousetrap')

module.exports = (state, bus) => {
  Mousetrap.bind('esc', () => {
    if (state.datasources.shown) {
      bus.emit('datasources:toggle-shown')
    }
  })

}
