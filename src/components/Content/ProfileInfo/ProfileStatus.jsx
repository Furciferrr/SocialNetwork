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
    })
  }

  render() {

    return (
      <div className={classes}>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activatedEditMode}>{this.props.status ? this.props.status: 'Not status'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status} />
          </div>
        }

      </div>
    )
  }
}

export default ProfileStatus