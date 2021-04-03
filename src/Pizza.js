import React from "react";
import { Link } from "react-router-dom";

const Pizza = () => {

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
            <img style={styles.container} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png" alt=""/>
            <Link exact to="/">Go Back</Link>
        </div>

    )
}

export default Pizza;