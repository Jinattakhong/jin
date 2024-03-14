import React from "react";
function Home(props) {
    return (
        <div className="App">
            <h1>Home</h1>
            <h1>{props.x}ประวัติศาสตร์ชุดแห่งการแก้แค้น</h1>
            <h1>{props.myname}เรื่องเล่าประวัติศาสตร์แฟชั่น</h1>
            <h1>{props.y}เว็บไซต์เกี่ยวกับการเล่าเรื่องประวัติศาสตร์แฟชั่น</h1>
            <h1>{props.myname} เรียนรู้ชุดแฟชั่นสุดไอคอนนิกของคนดัง</h1>        
            </div>
    );
}
export default Home;