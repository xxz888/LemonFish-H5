import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
const config = {
    plugins: [createPersistedState()],
    state: {
        LOADING: false,
        token: '',
        trainType:'',
        trainTypeDesc:'',
        openId:'',
        appId:'',
        name:'',
        lat:'',
        lng:'',
        trainTimeType:''//1 线上  2线下
    },
    getters: {
        LOADING: state => state.LOADING,
        token: state => state.token,
        trainType: state => state.trainType,
        trainTypeDesc: state => state.trainTypeDesc,
        openId: state => state.openId,
        appId: state => state.appId,
        name: state => state.name,
        lat: state => state.lat,
        lng: state => state.lng,
        trainTimeType: state => state.trainTimeType,

    },
    mutations: {
        showLoading(state) {
            state.LOADING = true
        },
        hideLoading(state) {
            state.LOADING = false
        },
        
        updateToken(state, payload) {
            state.token = payload;
        },
        updateTrainType(state, payload) {
            state.trainType = payload;
        },
        updateTrainTypeDesc(state, payload) {
            state.trainTypeDesc = payload;
        },
        updateOpenId(state, payload) {
            state.openId = payload;
        },
        updateAppId(state, payload) {
            state.appId = payload;
        },
        updateName(state, payload) {
            state.name = payload;
        },
        updateLat(state, payload) {
            state.lat = payload;
        },
        updateLng(state, payload) {
            state.lng = payload;
        },
        updateTrainTimeType(state, payload) {
            state.trainTimeType = payload;
        },
    },
    actions: {}
}
const store = new Vuex.Store(config);
export default store;


