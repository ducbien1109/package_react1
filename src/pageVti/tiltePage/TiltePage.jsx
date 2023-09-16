import logo from '../assets/pageimg.jpg'
function TiltePage(){
    return(
        <div className='contentPage'>
            <div className='content'>
            <h1>Học lập trình web có đơn giản không</h1>
            <img src={logo}/>
            <h2>Đây là tiêu đề của bài viết</h2>
            <p>Lưu ý rằng bạn cũng có thể tạo động đường dẫn đến tệp hình ảnh dựa trên các điều kiện hoặc dữ liệu trong ứng dụng của bạn.
                Lưu ý rằng bạn cũng có thể tạo động đường dẫn đến tệp hình ảnh dựa trên các điều kiện hoặc dữ liệu trong ứng dụng của bạn.</p>
            <button>Đọc thêm</button>
            </div>
        </div>
    )
}
export default TiltePage