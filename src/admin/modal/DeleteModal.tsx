import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal';
import { ModalInterface } from './Modal';
export interface DeleteModalInterface extends ModalInterface {
  onDelete: (id:number) => void;
  warning?: string;
}

class DeleteModal extends React.Component<DeleteModalInterface> {
  render() {
    const { isOpen, toggle, values, text, warning, name, onDelete } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{text}</ModalHeader>
        <ModalBody>{warning}</ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              onDelete(values.id)
            }}
          >
            Delete {name}
          </button>{' '}
          <button
            onClick={() => {
              toggle();
            }}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default DeleteModal;
