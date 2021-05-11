class DropBoxController {
  constructor() {
    
    this.btnSenfileEl = document.querySelector('#btn-send-file')
    this.inputFilesEl = document.querySelector('#files')
    this.snackModalEl = document.querySelector('#react-snackbar-root')
    
    this.initEvents()
  }
  
  initEvents() {
    this.btnSenfileEl.addEventListener('click', event => {
      this.inputFilesEl.click()
    })
    
    this.inputFilesEl.addEventListener('change', event => {
      this.snackModalEl.style.display = 'block'
    })
  }
}