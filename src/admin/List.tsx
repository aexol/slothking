import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import AdminList from './components/AdminList';
import { PreloaderScreen } from './PreloaderScreen';
import { withStore, StoreProps, socket } from '../syncano';
import { s, toFormDataOrObject } from '../syncano/server';
class List extends React.Component<StoreProps & RouteComponentProps<any>> {
  render() {
    const { store, match: { params: { model } } } = this.props;
    const models = store.get('models');
    const schema = store.get('schema');
    const modelObject = models.find((s) => s.name === model);
    if (!models) {
      return <PreloaderScreen size={64} text="Loading models..." />;
    }
    return (
      <AdminList
        schema={schema.find((s) => s.name === model)}
        model={modelObject.objects}
        references={models}
        onAdd={(e) =>
          socket((store) =>
            s
              .post(
                'rest-framework/add',
                toFormDataOrObject({
                  model,
                  ...e
                })
              )
              .then((object) => ({
                models: models.map(
                  (m) =>
                    m.name === modelObject.name
                      ? {
                          ...modelObject,
                          objects: [...modelObject.objects, object]
                        }
                      : m
                )
              }))
          )
        }
        onUpdate={(id, e) =>
          socket((store) =>
            s
              .post(
                'rest-framework/update',
                toFormDataOrObject({
                  model,
                  id,
                  ...e
                })
              )
              .then((object) => ({
                models: models.map(
                  (m) =>
                    m.name === modelObject.name
                      ? {
                          ...modelObject,
                          objects: modelObject.objects.map((o) => (o.id === object.id ? object : o))
                        }
                      : m
                )
              }))
          )
        }
        onDelete={(id) =>
          socket((store) =>
            s
              .post('rest-framework/remove', {
                model,
                id
              })
              .then((object) => ({
                models: models.map(
                  (m) =>
                    m.name === modelObject.name
                      ? {
                          ...modelObject,
                          objects: modelObject.objects.filter((o) => o.id !== object.id)
                        }
                      : m
                )
              }))
          )
        }
      />
    );
  }
}
export default withRouter(withStore('schema', 'models')(List));
