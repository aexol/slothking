import * as React from 'react';
import ModalSet from '../modal/ModalSet';
import * as styles from './List.css';
import * as multiSelectStyles from './MultiSelect.css';
import { MultiSelect, filterRules } from '@aexol/slothking-form';
class List extends React.Component<
  {
    model: Array<any>;
    schema: any;
    references: Array<any>;
    onAdd:Function;
    onDelete:Function;
    onUpdate:Function;
  },
  any
> {
  state = {
    filtr: [],
    activeFilters: [],
    search: '',
    open: '',
    values: {},
    display: { value: 'id' }
  };
  componentWillMount() {
    const { schema } = this.props;
    this.setState({
      display: { value: schema.display, label: schema.display }
    });
  }
  render() {
    const { model, schema, references, onAdd, onDelete, onUpdate } = this.props;
    let { values, open, filtr, display } = this.state;
    if (!model) {
      return <div className={styles.ChooseModel}>Choose a model</div>;
    }
    let renderedObjects = model;
    let filterKeys = Object.keys(filtr).filter((f) =>
      this.state.activeFilters.find((a) => a.value === f)
    );
    console.log(references);
    let fields = schema.fields;
    fields = fields.map((f) => {
      let { filter_index, ...field } = f;
      if (['relation', 'reference'].indexOf(f.type) !== -1) {
        field = {
          ...field,
          type: 'select',
          values: references
            .find((r) => r.name === field.target)
            .objects.map((o) => ({ label: o.name, value: o.id }))
        };
      }
      if (f.type === 'geopoint') {
        field = {
          ...field,
          type: 'object'
        };
      }
      if (f.type === 'array' && values[f.name]) {
        values = {
          ...values,
          [f.name]: values[f.name].map((v) => ({ label: v, value: v }))
        };
      }
      return field;
    });
    if (filterKeys.length) {
      for (var f of filterKeys) {
        renderedObjects = filterRules({
          value: filtr[f],
          values: renderedObjects,
          name: f,
          type: schema.fields.find((field) => field.name === f).type
        });
      }
    }
    return (
      <div className={styles.SyncanoManage}>
        <div className={styles.SyncanoFilters}>
          <div className={styles.SyncanoMultiSelects}>
            <div className={styles.MultiSelectSearchFields}>
              {schema.fields
                .filter((f) => this.state.activeFilters.find((a) => a.value === f.name))
                .map((f) => (
                  <input
                    key={f.name}
                    type="text"
                    placeholder={f.name}
                    onChange={(e) => {
                      this.setState({
                        filtr: {
                          ...this.state.filtr,
                          [f.name]: e.target.value
                        }
                      });
                    }}
                  />
                ))}
            </div>
            <MultiSelect
              styles={multiSelectStyles}
              options={schema.fields
                .filter((f) => f.type === 'string')
                .map((f) => ({ label: f.name, value: f.name }))}
              multi={true}
              value={this.state.activeFilters}
              onChange={(activeFilters) => {
                this.setState({
                  activeFilters
                });
              }}
              placeholder="Filter by.."
            />
            <MultiSelect
              onChange={(e) => {
                this.setState({
                  display: e,
                  search: ''
                });
              }}
              styles={multiSelectStyles}
              placeholder="Display"
              value={display}
              options={schema.fields.filter((f) => f.type === 'string').map((f) => ({
                label: f.name,
                value: f.name
              }))}
            />
          </div>
          <div
            className={styles.AddButton}
            onClick={() => {
              this.setState({
                open: 'add'
              });
            }}
          >
            <div className={styles.Horizontal} />
            <div className={styles.Vertical} />
          </div>
        </div>
        <div className={styles.SyncanoList}>
          {renderedObjects.map((m) => (
            <div className={styles.SyncanoObject} key={m.id}>
              <div
                onClick={() => {
                  this.setState({
                    open: 'delete',
                    values: { id: m.id }
                  });
                }}
                className={styles.deleteButton}
              >
                ×
              </div>
              <div
                className={styles.displayName}
                onClick={() => {
                  this.setState({
                    open: 'update',
                    values: { ...m }
                  });
                }}
              >
                {display ? m[display.value] || m.id : m.id}
              </div>
            </div>
          ))}
        </div>
        <ModalSet
          name={schema.name}
          fields={fields}
          values={values}
          open={open}
          toggle={(o) => {
            this.setState({
              open: o
            });
          }}
          onAdd={onAdd}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }
}
export default List;
