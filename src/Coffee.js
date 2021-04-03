import React from "react";
import { Link } from "react-router-dom";

const Coffee = () => {
    const styles = {
        container: {
            width: '500px',
            height: '500px',
            padding: "1em",
            margin: "1em",
        }

    }
    return (
        <div>
            <img style={styles.container} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/220px-A_small_cup_of_coffee.JPG" alt=""/>
            <Link exact to="/">Go Back</Link>
        </div>

    )
}

export default Coffee;