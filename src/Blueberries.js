import React from "react";
import { Link } from "react-router-dom";

const Blueberries = () => {
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
            <img style={styles.container} src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/blueberries-1296x728-feature.jpg" alt=""/>
            <Link exact to="/">Go Back</Link>
        </div>

    )
}

export default Blueberries;