export default class Rain{
  constructor(config){

    this.initConfig(config)
    this.initChildren()

    this.init()

    this.bindEvents()
  }

  init(){
    this.currentBreakPoint = this.getCurrentBreakPoint()
    this.scheduled = []

    if(this.config.debug) console.log('rain.js: breakpoint '+this.currentBreakPoint)
    if(this.config.debug) window.rain = this

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
      debug: false, // activate logs and set this rain instance accessible from console via 'rain'
      container: null,
      breakpointLG: 1200,
      breakpointMD: 1024,
      breakpointSM: 768,
      breakpointXS: 640,
      childInterval: 100, // defer children apparition by given ms, dont if no value
      cols: {
        lg: 5,
        md: 4,
        sm: 2,
        xs: 1
      },

      //callbacks
      onAdd: null,
      onDone: null
    }
    this.el = config.container || config.element || config.el || config.holder || config.parent
    this.config = Object.assign(dconf, config)
    this.config.cols = Object.assign(dconf.cols, config.cols)
  }

  initChildren(){
    let children = [].slice.call(this.el.children)
    // let rainChildren = []
    children.map( (child, i) => {
      let rainEl = document.createElement('div')
      this.el.appendChild(rainEl)
      rainEl.appendChild(child)
      rainEl.classList.add('rain-element')
      rainEl.classList.add('rain-element-'+i)
      rainEl.setAttribute('data-index', i)
    })
  }

  build(){
    this.el.classList.add('rain-container')
    this.clearChildren()
    for (let i = 0; i < this.cols; i++) {
      let col = this.getColumn()
      this.columns.push(col)
      this.el.appendChild(col)
    }
    this.children.map(child => { this.add(child) })
  }

  applyBreakPoints(){
    let w = window.innerWidth
    this.el.setAttribute('data-col', this.getBreakpointCols('lg') )
    if( this.config.breakpointLG >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('lg') )
    if( this.config.breakpointMD >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('md') )
    if( this.config.breakpointSM >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('sm') )
    if( this.config.breakpointXS >= w ) this.el.setAttribute('data-col', this.getBreakpointCols('xs') )
  }

  getColumn(){
    var col = document.createElement('div')
    col.classList.add('rain-column')
    return col
  }

  getLowestColumn(){
    var min = this.columns[0]
    var minH = 10000000000
    let heights = []
    for (var i = 0; i < this.columns.length; i++) {
      var col = this.columns[i]
      if(!col.children.length) return col;
      let lastChild = col.children[col.children.length-1]
      let h = lastChild.getBoundingClientRect().top + lastChild.getBoundingClientRect().height
      heights.push( h )
      if( h < minH) {
        min = col
        minH = h
      }
    }
    return min
  }

  extractChildren(){
    // get method
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
  clearScheduled(){
    this.scheduled.map( scheduled => clearTimeout(scheduled) )
    this.scheduled = []
  }

  add(addedElement){
    let element = addedElement
    let timeout = 0

    if(this.config.childInterval) {
      if(!this.lastAddedT) this.lastAddedT = Date.now()
      timeout = (this.lastAddedT - Date.now()) + this.config.childInterval
      if(timeout < 0) timeout = 0
      this.lastAddedT = Date.now() + timeout
    }

    this.scheduled.push(setTimeout(()=>{

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

      this.scheduled.splice(0, 1)
      if(!this.scheduled.length) this.onDone()

    }, timeout))

  }
  clear(){
    this.children = []
    this.clearChildren()
    this.clearScheduled()
    this.init()
  }

  bindEvents(){
    var self = this
    window.addEventListener('resize', ()=>{
      let newBreakpoint = this.getCurrentBreakPoint()
      if ( ( this.currentBreakPoint != newBreakpoint )
      && ( this.getBreakpointCols(this.currentBreakPoint) != this.getBreakpointCols(newBreakpoint) ) ) self.init()

    })
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

  /**
   * Triggers each time an element is added to rainContainer
   **/
  onAdd(element, index){
    if(this.config.debug) console.log('onAdd callback !')
    if(this.config.onAdd) this.config.onAdd(element, index)
  }

  /**
   * Triggers when all scheduled-add elements has been added
   **/
  onDone(){
    if(this.config.debug) console.log('onDone callback !')
    if(this.config.onDone) this.config.onDone()
  }
} //RainContainer
