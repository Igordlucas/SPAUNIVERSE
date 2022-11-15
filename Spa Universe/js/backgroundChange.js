export function backgroundChange({ bodyPage }) {
    function home() {
      bodyPage.classList.add('bghome')
      bodyPage.classList.remove('bguniverse')
      bodyPage.classList.remove('bgexplore')
    }
  
    function universe() {
      bodyPage.classList.remove('bgexplore')
      bodyPage.classList.add('bguniverse')
      bodyPage.classList.remove('bghome')
    }
  
    function exploration() {
      bodyPage.classList.remove('bghome')
      bodyPage.classList.remove('bguniverse')
      bodyPage.classList.add('bgexplore')
    }
  
    return {
      home,
      exploration,
      universe,
    }
  }