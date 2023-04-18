import Header from '../components/Header';
import Slidebar from './Slidebar';

function DefaultLayOut({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Slidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayOut;
