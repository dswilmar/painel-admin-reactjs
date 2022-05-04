import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        auth.logout();
        navigate('/login');
        toast.success('Sessão encerrada com sucesso.');
    }

    return (
        <div id="wrapper">
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Painel de Controle</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Usuários</a></li>
                        </ul>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right navbar-user">
                                <li className="dropdown messages-dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> Mensagens <span className="badge">0</span> <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-header">Nenhuma mensagem para exibir</li>
                                        <li className="message-preview">
                                            <a href="#">
                                                <span className="avatar"><i className="fa fa-bell"></i></span>
                                                <span className="message">Security alert</span>
                                            </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li className="message-preview">
                                            <a href="#">
                                                <span className="avatar"><i className="fa fa-bell"></i></span>
                                                <span className="message">Security alert</span>
                                            </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li><a href="#">Go to Inbox <span className="badge">2</span></a></li>
                                    </ul>
                                </li>
                                <li className="dropdown user-dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-user"></i> Wilmar<b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><i className="fa fa-user"></i> Profile</a></li>
                                        <li><a href="#"><i className="fa fa-gear"></i> Settings</a></li>
                                        <li className="divider"></li>
                                        <li>
                                            <a href="#" onClick={handleLogout}>Sair</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h2>
                                    <i className="fa fa-desktop"></i>
                                    Dashboard
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;