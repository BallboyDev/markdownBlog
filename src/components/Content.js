import React from 'react';
import Marked from 'marked';

export default class Content extends React.Component {
    state = {
        content: ''
    }

    componentDidMount = () => {
        fetch(require('../contents/20210101.md').default).then((res) => {
            return res.text()
        }).then((md) => {
            // console.log(md)
            this.setState({ content: md })
            document.getElementById('a20210101').innerHTML = Marked(this.state.content)
        })
    }

    render = () => {
        return (
            // <div className='content' dangerouslySetInnerHTML={{ __html: Marked(this.state.content) }} />
            <div className='content' id='a20210101'></div>
        )
    }
}