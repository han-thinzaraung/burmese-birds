import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BirdDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    // console.log(id);
    const { data: bird, error, isPending } = useFetch('https://birds-json.vercel.app/Tbl_Bird/' + id);
    const handleClick = () => {
        fetch('https://birds-json.vercel.app/Tbl_Bird/' + bird.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        }).catch((e) => {
            console.log(e);
        })

    }
    const handleBack = () => {
        history.goBack(); // Go back to the previous page
    };
    return (
        <div className="container-fluid px-5">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {bird && (
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-md-4">
                        <div className="card shadow rounded-2">
                            <img src={process.env.PUBLIC_URL + '/' + bird.ImagePath} className="card-img-top" alt="Bird" />
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="card bg-secondary shadow rounded-5">
                            <div className="card-body text-white">
                                <h2 className="card-title">{bird.BirdEnglishName}</h2>
                                <h3 className="card-subtitle mb-2 text-light">{bird.BirdMyanmarName}</h3>
                                <p className="card-text">{bird.Description}</p>
                                <div className="d-flex justify-content-around">
                                    <button className="btn btn-outline-dark" onClick={handleBack}>Back</button>
                                    <button className="btn btn-outline-warning" onClick={handleClick}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default BirdDetails;