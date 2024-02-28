import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { FaTrash } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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
                <div className="row d-flex justify-content-center align-items-center p-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-4">
                        <div className="card shadow rounded-5">
                            <img src={process.env.PUBLIC_URL + '/' + bird.ImagePath} className="card-img-top rounded-5" alt="Bird" />
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="card bg-secondary shadow rounded-5">
                            <div className="card-body text-white">
                                <h3 className="card-title text-center mb-3">{bird.BirdEnglishName}</h3>
                                <h5 className="card-subtitle text-center text-light mb-3">{bird.BirdMyanmarName}</h5>
                                <p className="card-text px-3">{bird.Description}</p>
                                <div className="d-flex justify-content-around mt-3">
                                    <button className="btn btn-dark custom-icon" onClick={handleBack}><FaArrowAltCircleLeft /></button>
                                    <button className="btn btn-dark custom-icon" onClick={handleClick}><FaTrash/></button>
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