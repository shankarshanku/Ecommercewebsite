// import Logo from "/images/poster.avif"
import '../styles/Home.css'

const Home = () => {
    //js code
    let data =[ {
        image:"/images/pathan.avif"
    },
    {
        image:"/images/kranti.avif"
    },
    {
        image:"/images/michael.avif"
    },
    {
        image:"images/woman_king.avif"
    },
    {
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyNy4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340527-nytnhqmleg-portrait.jpg"
    }
]
    return (
        <div className="Home">
            <div className="banner">
                <img style={{ width: "100%" }} src="/images/poster.avif" alt="" />
            </div>
            <div className="posters">
                <div className="title">
                    <h2>Recommended Movies</h2>
                    <a href="" style={{textDecoration:"none"}}>See All &gt;</a>
                </div>
                <div className="images">
                    {/* <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAyNjkuN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-hasmqjqyvj-portrait.jpg" alt="" />
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAxNC4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323056-rfrdkpqtlr-portrait.jpg" alt="" />
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjUuOUsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00342919-hybcdekezj-portrait.jpg" alt="" />
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OC45SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333398-wmaqeuamwn-portrait.jpg" alt="" />
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi41SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351144-gwdjywpxqz-portrait.jpg" alt="" /> */}
                    { data.map( (x)=>(<img src={x.image} alt="" /> ))}
                </div>
            </div>
        </div>

    );
}

export default Home;