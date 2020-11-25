import React  from 'react'

function ReactIf(props) {
    return <div style={props.show ?{} : {display:'none'}}>
        {props.children}
    </div>
}

export default ReactIf