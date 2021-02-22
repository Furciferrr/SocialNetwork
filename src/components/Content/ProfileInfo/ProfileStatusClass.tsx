import React, { ChangeEvent } from 'react';


type PropsType = {
  status: string
  updateStatusThunk: (newStatus: string)=> void

}

type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
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

  onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState ({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate (prevProps: PropsType, prevState: StateType ) {
    if (prevProps.status !== this.props.status) {
      this.setState ({
        status: this.props.status
      })
    }
  }

  render() {

    return (
      <div>
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