import {Component, useEffect, useState} from "react"
import "./post-view.css";
import Header from '../header/header';
const PostView = ()=> {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:3004/user").then((res)=>res.json()).then((data)=> {
            setPosts(data);
        }).catch((err)=> {
            if(err) {
                console.log(err)
            }
        })
    }, []);
    return (
        <>
        <Header/>
        {posts.map((post)=>{
            return(
                <section className="card">
                <section className="card-header">
                    <div>
                        <div className="name">{post.name}</div>
                        <div className="location">{post.location}</div>
                    </div>
                    <span>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={post.PostImage} alt="dp"/>
                </section>
                <section className="card-actions">
                    <span>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                    <span>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </span>
                    <span>{post.date}</span>
                </section>
                <section className="likes">{post.likes} likes</section>
                <section className="description">{post.description}</section>
            </section>       
        )
    })}
    </>
    )
}
export default PostView;