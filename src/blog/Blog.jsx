import avatar from '../pageVti/assets/blog.jpg'
function Blog({users}){
    return(
        <div className='blog'>
            <div className='avt'>
            <img src={avatar} className='img-blog'/>
            </div>
            <div>
            <h1>{users.title}</h1>
            <p>{users.content}</p>
            </div>
        </div>
    )
}

const user1 = {
    title: "Blog MTP",
    content:"Javascript cũng cho phép tự định nghĩa các đối tượng của chúng ta và cũng có thể tạo ra các instance trong thời gian chạy. Trong Javascript, tất cả mọi thứ đều là đối tượng và mọi đối tượng đều có chung tổ tiên cao nhất được gọi là Object."
}
function App(){
    return(
        <div>
            <Blog users = {user1}/>
        </div>
    )
}
export default App