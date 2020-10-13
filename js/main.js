const arrColor = [
  '#007bff', 
  '#6610f2', 
  '#6f42c1', 
  '#e83e8c', 
  '#dc3545',
  '#fd7e14',
  '#ffc107',
  '#28a745',
  '#20c997',
  '#17a2b8',
  '#fff',
  '#6c757d',
  '#343a40',
  '#007bff',
  '#6c757d',
  '#28a745',
  '#17a2b8',
  '#ffc107',
  '#dc3545',
  '#f8f9fa',
  '#343a40'
]


function changeColorFunc() {
  const mainBg = document.querySelector('.main__bg')
  const clickBg = document.querySelector('.bg__click')
  const colorInput = document.querySelector('#color')

  clickBg.addEventListener('click', changeColor)
  colorInput.addEventListener('change', changeColorInput)

  function changeColor(elem) {
    elem.preventDefault()
    const count = Math.trunc(Math.random()*arrColor.length)
    mainBg.style.backgroundColor = arrColor[count]
  }
  
  function changeColorInput(elem) {
    elem.preventDefault()
    mainBg.style.backgroundColor = this.value
  }
}

changeColorFunc()