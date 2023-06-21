import plugin from 'windicss/plugin'

const electronWindPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.electron-drag-deep': {
      '-webkit-app-region': 'drag'
    },
    '.electron-drag': {
      '-webkit-app-region': 'drag',
      '& > *': {
        '-webkit-app-region': 'no-drag'
      }
    },
    '.electron-no-drag': {
      '-webkit-app-region': 'no-drag'
    },
    '.electron-ignore-mouse-events': {
      content: ''
    }
  })
})

export default electronWindPlugin