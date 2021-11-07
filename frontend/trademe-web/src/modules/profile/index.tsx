import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nameChange } from '../../actions/profile';

const Profile = (props: any) => {
  const { name, nameChange } = props;

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          nameChange(e.target.value);
        }}
      />
    </div>
  );
};

const mapStateToProps = (store: any) => ({
  name: store.profileState.name,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ nameChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
