import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export const ProtectedLayout = ({ children }) => {

    const auth = useAuth();
    const navigate = useNavigate();

    if (!auth.email) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Ops! Você precisa fazer login antes de continuar.</h1>
                        <button className="btn btn-default" onClick={() => { navigate('/login') }}>Clique aqui para fazer login</button>
                    </div>
                </div>
            </div>
        );
    }

    return children;
}