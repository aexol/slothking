import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './Modal.css'
export interface ModalInterface{
  isOpen?:boolean,
  toggle?:Function,
  name?:string,
  text?:string,
  values?:any,
}
export class Modal extends React.Component<ModalInterface> {
  render() {
    const { isOpen } = this.props
    return (
      <div
        className={classnames({
          [styles.Modal]: true,
          [styles.open]: isOpen
        })}
      >
        <div className={styles.Dialog}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export class ModalHeader extends React.Component<{ toggle: any }> {
  render() {
    const {
      toggle
    } = this.props
    return (
      <div className={styles.ModalHeader}>
        <div className={styles.Close} onClick={toggle}><div>×</div></div>
        <span> {this.props.children}</span>
      </div>
    )
  }
}
export class ModalBody extends React.Component {
  render() {
    return (
      <div className={styles.ModalBody}>
        {this.props.children}
      </div>
    )
  }
}
export class ModalFooter extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export class ModalChangePassword extends React.Component {
  render() {
    return (
      <div
        className={classnames({
          [styles['change-password']]: true
        })}
      >
        <div className={styles.Dialog}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
