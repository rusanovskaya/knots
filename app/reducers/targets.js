/*
 * knots
 * Copyright 2018 data.world, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the
 * License.
 *
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *
 * This product includes software developed at
 * data.world, Inc.(http://data.world/).
 */

import {
  UPDATE_TARGETS,
  TARGETS_LOADING,
  TARGET_SELECTED
} from '../actions/targets';
import { LOADED_KNOT, RESET_STORE, LOADED_KNOT_JSON } from '../actions/knots';

export type targetsStateType = {
  +targets: Array<{}>,
  +targetsLoading: boolean,
  +targetSelected: boolean,
  +selectedTarget: { name: sring, image: string }
};

export function defaultState() {
  return {
    targets: [],
    targetsLoading: false,
    targetInstalled: false,
    targetSelected: false,
    selectedTarget: { name: '', image: '' }
  };
}

export default function targets(state = defaultState(), action) {
  switch (action.type) {
    case TARGETS_LOADING:
      return Object.assign({}, state, {
        targetsLoading: true
      });
    case UPDATE_TARGETS:
      return Object.assign({}, state, {
        targetsLoading: false,
        targets: action.targets
      });
    case TARGET_SELECTED:
      return Object.assign({}, state, {
        targetSelected: true,
        selectedTarget: action.target
      });
    case LOADED_KNOT:
      return Object.assign({}, state, {
        selectedTarget: action.target
      });
    case LOADED_KNOT_JSON:
      return Object.assign({}, state, {
        selectedTarget: action.target
      });
    case RESET_STORE:
      return defaultState();
    default:
      return state;
  }
}
