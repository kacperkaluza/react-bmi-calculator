import { useState } from "react";
import "./styles/App.css";
import weightIcon from "./assets/weight.png";
import heightIcon from "./assets/height.png";

function App() {
    return (
        <div className="App">
            <CalculateBmi />
        </div>
    );
}

function CalculateBmi(props) {
    const [bmi, setBmi] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const calculateBmi = () => {
        const bmiValue = weight / (height * height);
        console.log(
            "Weight: " + weight + ", Height: " + height + ", BMI: " + bmiValue
        );
        setBmi(bmiValue);
    };

    return (
        <div className="bmi--calculator">
            <h1>BMI Calculator</h1>
            <div className="form-container">
                <img className="form-icon" src={weightIcon} />
                <input
                    type="number"
                    placeholder="kg"
                    className="form-input"
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className="form-container">
                <img className="form-icon" src={heightIcon} />
                <input
                    type="number"
                    placeholder="m"
                    className="form-input"
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <h2>BMI: {bmi}</h2>
            <button className="form-submit" onClick={calculateBmi}>
                Calculate BMI
            </button>
        </div>
    );
}

export default App;
