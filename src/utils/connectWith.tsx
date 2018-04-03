import { ComponentType } from 'react';
import { bindActionCreators, ActionCreatorsMapObject } from 'redux';
import { connect, Dispatch } from 'react-redux';
import IStoreState from '../store/IStoreState';

function buildMapDispatchToProps(actions: ActionCreatorsMapObject) {
  return (dispatch: Dispatch<IStoreState>) => ({
    ...bindActionCreators(actions, dispatch)
  });
}

interface IConnectProps {
  props?: (state: IStoreState) => object,
  actions?: ActionCreatorsMapObject
}

export function connectWith(map: IConnectProps, component: ComponentType) {
  const props = map.props || (() => ({}));
  const actions = map.actions || {};

  return connect(props, buildMapDispatchToProps(actions))(component);
}

export default connectWith;
