function customRender(reactEle, container){
    // const domEle = document.createElement(reactEle.type)
    // domEle.innerHTML = reactEle.children
    // domEle.setAttribute('href', reactEle.props.href)
    // domEle.setAttribute('target', reactEle.props.tearget)

    // container.appendChild(domEle)


    //for repeateation -loop
    const domElement = document.createAttribute(reactEle.type)
    domElement.innerHTML = reactEle.children
    for(const prop in props)
    {
        if(prop == children)continue;
        domElement.setAttribute(prop,reactEle.props[prop])
    }
    
}

const reactEle = {
    type: 'a',
    props:{
          href: 'https://www.google.com',
          tearget: '_black'
    },
    children: 'Click me to cisit google'
}

const mainContainer = document.getElementById('root')


customRender(reactEle,mainContainer)