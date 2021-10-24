import {useRouter} from "next/router";
import {useEffect} from "react";

const Loader = () => {
    const router = useRouter()

    const hide = () => {
        hideLoader()
    }

    useEffect(() => {
        hide()
        function routeChangeStart(url) {
            showLoader()
        }
        function routeChangeComplete(url) {
            hide()
        }
        router.events.on( 'routeChangeStart', routeChangeStart);
        router.events.on( 'routeChangeComplete', routeChangeComplete);

    }, [])


    return (
        <div className="loader" id="main-loader">
            <div className="spinner">
                <div className="circle"/>
                <div className="circle"/>
                <div className="circle"/>
                <div className="circle"/>
            </div>
        </div>
    )
}
export default Loader

export const showLoader = () => {
    try {
        document.querySelector('#main-loader').style.visibility = 'visible'
    } catch (e) {

    }
}

export const hideLoader = () => {
    try {
        document.querySelector('#main-loader').style.visibility = 'hidden'
    } catch (e) {

    }
}