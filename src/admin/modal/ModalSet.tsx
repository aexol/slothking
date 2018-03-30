import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import * as React from 'react';

import { ModalInterface } from './Modal';
import { FieldDefinition } from '@aexol/slothking-form';

interface ModalSetInterface extends ModalInterface {
  fields: Array<FieldDefinition>;
  open: string;
  toggle: Function;
  onAdd: (e: Object) => void;
  onUpdate: (id: number, e: Object) => void;
  onDelete: (id:number) => void;
  values?: Object;
  initialDataAdd?: Object;
  initialDataUpdate?: Object;
  addText?: string;
  updateText?: string;
  deleteText?: string;
  warning?: string;
}

class ModalSet extends React.Component<ModalSetInterface> {
  render() {
    const {
      name,
      fields,
      values,
      open,
      toggle,
      onAdd,
      onUpdate,
      onDelete
    } = this.props;
    const {
      addText = `Add ${name}`,
      updateText = `Edit ${name}`,
      deleteText = `Do you really want to delete ${name}?`
    } = this.props;
    const deleteText1 = `Delete ${name}`;
    return (
      <div className="ModalSet">
        <AddModal
          fields={fields}
          isOpen={open === 'add'}
          name={name}
          text={addText}
          toggle={toggle}
          onAdd={onAdd}
        />
        <UpdateModal
          fields={fields}
          isOpen={open === 'update'}
          name={name}
          text={updateText}
          toggle={toggle}
          values={values}
          onUpdate={onUpdate}
        />
        <DeleteModal
          values={values}
          isOpen={open === 'delete'}
          name={name}
          text={deleteText1}
          toggle={toggle}
          warning={deleteText}
          onDelete={onDelete}
        />
      </div>
    );
  }
}
export default ModalSet;
