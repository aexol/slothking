import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import AdminList from './components/AdminList';
import { PreloaderScreen } from './PreloaderScreen';
import { withStore, StoreProps, socket, actions } from '../syncano';
class List extends React.Component<StoreProps & RouteComponentProps<any>> {
  render() {
    const { store, match: { params: { model } } } = this.props;
    const models = store.get('models');
    const schema = store.get('schema');
    if (!models) {
      return <PreloaderScreen size={64} text="Loading models..." />;
    }
    return (
      <AdminList
        schema={schema.find((s) => s.name === model)}
        model={models.find((s) => s.name === model).objects}
        references={models}
        onAdd={(e) => {
          socket((store) =>
            actions
              .restFrameworkAdd({
                model,
                data: {
                  ...e
                }
              })
              .then((object) => ({
                [name]: [...store.get(name), object]
              }))
          ).then((response) => {
            this.setState({
              open: ''
            });
          });
        }}
        onUpdate={(id, e) => {
          socket((store) =>
            actions
              .restFrameworkUpdate({
                model,
                id,
                data: {
                  ...e
                }
              })
              .then((object) => ({
                [name]: [...store.get(name), object]
              }))
          ).then((response) => {
            this.setState({
              open: ''
            });
          });
        }}
        onDelete={(id) => {
          socket((store) =>
            actions
              .restFrameworkRemove({
                model,
                id
              })
              .then((object) => ({
                [name]: store.get(name).filter((o) => o.id !== id)
              }))
          ).then((response) => {
            this.setState({
              open: ''
            });
          });
        }}
      />
    );
  }
}
export default withRouter(withStore('schema', 'models')(List));
