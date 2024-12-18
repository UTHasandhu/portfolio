import Sandhu from "../Media/Sandhu_Harman.jpg";
import "./ActionCard.css";

function ActionCard() {

    return (
    <div class="card">
        <img src={Sandhu} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title --bs-primary">Harman Sandhu</h5>
            <p class="card-text --bs-primary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    );
}
export default ActionCard;
        