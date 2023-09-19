import React, { useState, useEffect } from "react";
import Loading from "./components/common/Loading";
import HelloWorld from "./components/common/HelloWorld";

import { CSSTransition } from 'react-transition-group';
import './styles/Global.css';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 5 seconds (you can replace this with actual loading logic)
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);


    return (
        <>
            <CSSTransition
                in={loading}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <Loading />
                {/* {loading ? (
                    <Loading /> // Display the Loading component while loading is true
                ) : (
                    <HelloWorld />
                )} */}
            </CSSTransition>
            <CSSTransition
                in={!loading}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <HelloWorld />
            </CSSTransition>
        </>
    )
};

export default App;