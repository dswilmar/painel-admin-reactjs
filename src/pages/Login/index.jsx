import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { toast } from 'react-toastify';

function Login() {

    const navigate = useNavigate();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(true);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setEnableSubmit(false);
            await auth.login(email, password);
            navigate('/');
            toast.success('Usuário autenticado com sucesso.');
        } catch (error) {
            setEnableSubmit(true);
            await toast.error('Ops! Usuário ou senha inválidos.');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3>Acesso ao Sistema</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Seu e-mail:</label>
                                    <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" autoComplete="off" required />
                                </div>
                                <div className="form-group">
                                    <label>Sua senha:</label>
                                    <input type="password" name="pass" onChange={(e) => { setPassword(e.target.value) }} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block btn-default" disabled={!enableSubmit}>
                                        {enableSubmit ? 'Acessar' : 'Autenticando...'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;