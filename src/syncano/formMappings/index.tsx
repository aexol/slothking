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
    if (['relation', 'reference'].indexOf(f.type) !== -1) {
      let ref = models.find((r) => r.name === f.target);
      if (values[f.name] && f.type === 'reference') {
        newValues[f.name] = ref.objects.find((r) => r.id === values[f.name])[ref.display];
      }
      if (values[f.name] && f.type === 'relation') {
        newValues[f.name] = values[f.name].map((v) => ({
          label: ref.objects.find((r) => r.id === v)[ref.display],
          value: v
        }));
      }
    }
    if (f.type === 'array' && values[f.name]) {
      newValues[f.name] = values[f.name].map((v) => ({ label: v, value: v }));
    }
    if (f.type === 'datetime' && values[f.name]) {
      newValues[f.name] = moment(values[f.name]);
    }
  });
  return newValues;
};
export const syncanoSend = ({ fields, values }) => {
  let newValues = { ...values };
  fields.map((f) => {
    if (f.type === 'array' && values[f.name]) {
      newValues[f.name] = values[f.name].map((v) => v.value);
    }
    if (f.type === 'relation' && values[f.name]) {
      newValues[f.name] = values[f.name].map((v) => v.value);
    }
    if (f.type === 'reference' && values[f.name]) {
      newValues[f.name] = values[f.name].value;
    }
    if (f.type === 'datetime' && values[f.name]) {
      newValues[f.name] = values[f.name].toISOString();
    }
  });
};
