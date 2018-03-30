import * as moment from 'moment';

export const syncanoRelations = ({ fields, models }) => {
  let newFields = fields.map((f) => {
    let { filter_index, order_index, unique, ...field } = f;
    if (['relation', 'reference'].indexOf(f.type) !== -1) {
      let ref = models.find((r) => r.name === field.target);
      field = {
        ...field,
        type: 'select',
        values: ref.objects.map((o) => ({ label: o[ref.display], value: o.id }))
      };
    }
    if (f.type === 'geopoint') {
      field = {
        ...field,
        type: 'object'
      };
    }
    return field;
  });
  return newFields;
};

export const syncanoReceive = ({ fields, models, values }) => {
  let newValues = { ...values };
  fields.map((f) => {
    if (f.type === 'datetime' && values[f.name]) {
      newValues[f.name] = moment(values[f.name]);
    }
  });
  return newValues;
};
export const syncanoSend = ({ fields, values }) => {
  let newValues = { ...values };
  fields.map((f) => {
    if (f.type === 'datetime' && values[f.name]) {
      newValues[f.name] = values[f.name].toISOString();
    }
  });
};
