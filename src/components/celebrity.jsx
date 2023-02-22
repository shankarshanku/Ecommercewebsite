import "../styles/celebrity.css"

const Celebrity = (prob) => {
    let celeb = prob.datas
    return (
        <div className="pictures">
            {celeb.map((x) =>
                <div>
                    <img src={x.image} alt="" />
                    <div>
                        <h1>{x.name}</h1>
                    </div>
                </div>)}
        </div>


    );
}

export default Celebrity;