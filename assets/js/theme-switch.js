// Toggle Dark Theme
const d = document.documentElement
const t = document.querySelectorAll('.theme-btn')[0]
const m = localStorage.getItem('theme')

exports.toggleTheme = () => {
  if (m === 'dark') {
    d.classList.add('theme-dark')
  }

  t.addEventListener('click', function () {
    if (d.classList.contains('theme-dark')) {
      d.classList.remove('theme-dark')
      localStorage.removeItem('theme')
    } else {
      d.classList.add('theme-dark')
      localStorage.setItem('theme', 'dark')
    }
  })
}
