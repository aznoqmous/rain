export default class RainContainer{
  constructor(config){
    this.initConfig(config)
    this.initChildren()

    this.init()

    this.bindEvents()
  }

  init(){
    this.currentBreakPoint = this.getCurrentBreakPoint()

    if(this.config.debug) console.log('rain.js: breakpoint '+this.currentBreakPoint)

    this.applyBreakPoints()
    this.cols     = this.el.getAttribute('data-col') || 2
    this.children = this.extractChildren()
    this.columns  = []
    this.build()
  }

  initConfig(config){
    config = config || {}
    let dconf = {
      prepend: false, // insert element at top of the list
      debug: false, // activate logs
      container: null,
      breakpointLG: 1200,
      breakpointMD: 1024,
      breakpointSM: 768,
      breakpointXS: 640,
      cols: {
        lg: 5,
        md: 4,
        sm: 2,
        xs: 1
      }
    }
    this.el = config.container || config.element || config.el || config.holder || config.parent
    this.config = Object.assign(dconf, config)
    this.config.cols = Object.assign(dconf.cols, config.cols)
  }

  initChildren(){
    for (let i = 0; i < this.el.children.length; i++) {
      let rainEl = this.el.children[i]
      rainEl.classList.add('rain-element-'+i)
      rainEl.classList.add('rain-element')
    }
  }

  build(){
    this.el.classList.add('rain-container')
    this.clearChildren()
    for (let i = 0; i < this.cols; i++) {
      let col = this.getColumn()
      this.columns.push(col)
      this.el.appendChild(col)
    }
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i]
      this.add(child)
    }
  }

  getColumn(){
    var col = document.createElement('div')
    col.classList.add('rain-column')
    return col
  }

  getLowestColumn(){
    var min = this.columns[0]
    for (var i = 0; i < this.columns.length; i++) {
      var col = this.columns[i]
      if(col.offsetHeight < min.offsetHeight) min = col
    }
    return min
  }

  extractChildren(){
    var children = []
    for (var i = 0; i < this.el.getElementsByClassName('rain-element').length; i++) {
      var child = this.el.getElementsByClassName('rain-element-'+i)[0]
      children.push(child.cloneNode('true'))
    }
    return children
  }
  clearChildren(){
    this.el.innerHTML = ''
  }

  add(addedElement){
    let element = addedElement
    if(typeof(addedElement) == 'string') {
      element = document.createElement('div')
      element.innerHTML = addedElement;
    }

    let lowest = this.getLowestColumn()

    if(this.config.prepend) lowest.insertBefore(element, lowest.firstChild)
    else lowest.appendChild(element)

    let index = this.el.getElementsByClassName('rain-element').length

    if(!element.classList.contains('rain-element')){
      element.classList.add('rain-element')
      element.classList.add('rain-element-' + index )
      element.setAttribute('data-index', index)
    }
    this.onAdd(element, element.getAttribute('data-index'))
    return element;
  }

  bindEvents(){
    var self = this
    window.addEventListener('resize', ()=>{
      let newBreakpoint = this.getCurrentBreakPoint()
      if ( ( this.currentBreakPoint != newBreakpoint )
      && ( this.getBreakpointCols(this.currentBreakPoint) != this.getBreakpointCols(newBreakpoint) ) ) self.init()

    })
  }
  applyBreakPoints(){
    let w = window.innerWidth
    this.el.setAttribute('data-col', this.getBreakpointCols('lg') )
    if( this.config.breakpointLG >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('lg') )
    if( this.config.breakpointMD >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('md') )
    if( this.config.breakpointSM >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('sm') )
    if( this.config.breakpointXS >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('xs') )
  }

  getCurrentBreakPoint(){
    let w = window.innerWidth
    if( this.config.breakpointMD <= w ) return 'lg';
    if( this.config.breakpointSM <= w ) return 'md';
    if( this.config.breakpointXS <= w ) return 'sm';
    return 'xs';
  }

  getBreakpointCols(bp){
    let attrCol = this.el.getAttribute('data-'+bp+'-col')
    if( attrCol ) return attrCol
    return this.config.cols[bp]
  }

  onAdd(element, index){
    if(this.config.onAdd) this.config.onAdd(element, index)
  }
} //RainContainer
