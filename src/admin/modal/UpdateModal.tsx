import * as React from 'react';
import { Form, FieldDefinition } from '@aexol/slothking-form';
import { Modal, ModalHeader, ModalBody } from './Modal';
import { ModalInterface } from './Modal';
import * as styles from './FormComponents.css';

export interface UpdateModalInterface extends ModalInterface {
  fields: Array<FieldDefinition>;
  onUpdate: (id: number, e: Object) => void;
}

class UpdateModal extends React.Component<UpdateModalInterface> {
  render() {
    const { isOpen, toggle, fields, values, name, onUpdate } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{`Edit ${name}`}</ModalHeader>
        <ModalBody>
          <Form
            className={styles.FormGen}
            fields={fields.map((f) => ({ ...f, styles }))}
            Submit={() => <input type="submit" value="Edit" className={styles.Submit} />}
            validate={(e) => {
              onUpdate(values.id, e);
            }}
            values={values}
          />
        </ModalBody>
      </Modal>
    );
  }
}
export default UpdateModal;
