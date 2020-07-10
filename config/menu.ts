import { getMenuData } from './service'; // 通过后台返回特定的数组json或者mock模拟数据
import { Reducer, Effect } from 'umi';

export interface MenuModelState {
    menuData: any[];
}

export interface MenuModelType {
    namespace: 'menu';
    state: MenuModelState;
    effects: {
        getMenuData: Effect;
    };
    reducers: {
        save: Reducer<MenuModelState>;
    };
}

const MenuModel: MenuModelType = {
    namespace: 'menu',
    state: {
        menuData: [],
    },
    effects: {
        *getMenuData({ payload, callback }, { call, put }) {
            const response = yield call(getMenuData);
            yield put({
                type: 'save',
                payload: response.data.menuData,
            });
        },
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                menuData: action.payload || [],
            };
        },
    },
};
export default MenuModel;
