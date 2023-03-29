import * as React from 'react';
import './blog.css';
import Blog1 from '../../images/blog-1.jpg';
import Blog2 from '../../images/blog-2.jpg';

const Blog = () => {
    return (
        <article className="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
                <ul className="blog-posts-list">
                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src={Blog1} alt="" loading="lazy" />
                            </figure>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>
                                    <span className="dot"></span>
                                    <time dateTime="2022-03-23">March 23, 2022</time>
                                </div>
                                <h3 className="h3 blog-item-title">Design conference in 2022</h3>
                                <p className="blog-text">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src={Blog2} alt="" loading="lazy" />
                            </figure>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>
                                    <span className="dot"></span>
                                    <time dateTime="2022-03-23">March 23, 2022</time>
                                </div>
                                <h3 className="h3 blog-item-title">Design conference in 2022</h3>
                                <p className="blog-text">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default Blog;
