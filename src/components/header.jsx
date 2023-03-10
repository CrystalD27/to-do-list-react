import { useNavigate } from 'react-router-dom';
import { MdAssignmentTurnedIn } from 'react-icons/md';
export const Header = () => {
    const navigate = useNavigate();
    const getNickname = () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        return userInfo.nickname;
    };

    const logOutHandler = () => {
        localStorage.removeItem('userInfo');
        navigate('/login');
    };
    return (
        <nav className="mb-10 flex items-center justify-between">
            <div className="flex items-center">
                <MdAssignmentTurnedIn />
                <h3 className="font-bold">ONLINE TODO LIST</h3>
            </div>
            <div className="flex">
                <span className="hidden sm:mr-6 sm:block sm:font-bold">{`${getNickname()}'s todo list`}</span>
                <button onClick={logOutHandler}>Log out</button>
            </div>
        </nav>
    );
};
