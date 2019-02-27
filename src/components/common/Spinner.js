import React, {Component} from 'react';
import spinner from './spinner.gif';
import { connect } from 'react-redux';


 class Spinner extends Component {
   render () {

    if(this.props.loading){
      return (
        <div>
          <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt="Loading..."
          />
        </div>
      );
    }
    return null;
   }
};

const mapStateToProps = (state) => ({
  loading: state.courses.loading
});

export default connect(mapStateToProps)(Spinner);