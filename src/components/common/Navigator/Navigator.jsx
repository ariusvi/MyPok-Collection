import {useNavigate} from 'react-router-dom';

export const Navigator = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(destination)}>
            {title}
        </div>
    );
}