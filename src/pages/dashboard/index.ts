import { connect } from 'react-redux';
import { State } from '../../reducers';
import Dashboard from './dashboard';

const mapStateToProps = (state: State) => ({
  profile: state.profile,
});

const mapDispatchToProps = () => ({});

export type DashboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
