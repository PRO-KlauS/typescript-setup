import Login from './login';
import { connect } from 'react-redux';
import { setUserToken } from '../../actions/login';
import { ThunkDispatchType } from '../../reducers';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatchType) => ({
  setUserToken: (body: { email: string; password: string }) =>
    dispatch(setUserToken(body)),
});

export type LoginProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
