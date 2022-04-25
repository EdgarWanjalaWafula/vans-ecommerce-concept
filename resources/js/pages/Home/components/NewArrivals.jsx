import ThemeButton from "../../../components/ThemeButton"
import { newArrivalsBg } from "../../../images/images"

const NewArrivals = () => {
    return (
        <div className="position-relative new-arrivals-card">
            <img src={newArrivalsBg} alt="" />
            <div className="title- position-relative text-white">
                <h1 className="position-relative">new arrivals pro skate</h1>
                <ThemeButton target='/' label='discover more' />
            </div>
        </div>
    )
}

export default NewArrivals