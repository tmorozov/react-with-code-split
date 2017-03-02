import React, { Component } from 'react'
import ArticleLayout from '../../components/article-layout'

// let About = () => (
//     <ArticleLayout title="About">
//         <div>
//             Splitting pages code with <b>react-router</b> and <b>webpack</b>
//         </div>
//     </ArticleLayout>
// );


class About extends Component {
    render() {
        return (
            <ArticleLayout title="About">
                <div>
                    Splitting pages code with <b>react-router</b> and <b>webpack</b>
                </div>
            </ArticleLayout>
        )
    }
}
export default About
