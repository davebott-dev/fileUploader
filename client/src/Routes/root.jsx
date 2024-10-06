import {Outlet} from 'react-router-dom';

const Root = () => {


    return (
        <div>
            <h1>Hello World</h1>
            <Outlet/>

        </div>
    )
}

export default Root;