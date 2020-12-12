import React from 'react';
import classes from './ProfileInfo.module.css';




class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activatedEditMode = () => {
    this.setState ( {
      editMode:true
    })
  }

  deactivatedEditMode() {
    this.setState ( {
      editMode:false
    });
    
    this.props.updateStatusThunk(this.state.status);
  }

  onChangeStatus = (e) => {
    this.setState ({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate (prevProps, prevState ) {
    if (prevProps.status !== this.props.status) {
      this.setState ({
        status: this.props.status
      })
    }
  }

  render() {

    return (
      <div className={classes}>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activatedEditMode}>{this.props.status ? this.props.status : 'Not status'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactivatedEditMode.bind(this)} value={this.state.status} />
          </div>
        }

      </div>
    )
  }
}

export default ProfileStatus