import React from 'react'
import './article-layout.css'

let ArticleLayout = (props) => (
    <article className="Article-Layout">
        <header className="Article-Layout-Header">
            {props.title}
        </header>
        <section className="Article-Layout-Section">
            {props.children}
        </section>
    </article>
);

ArticleLayout.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string
};

export default ArticleLayout