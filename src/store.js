/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
const MercantileApi = require('mercantile_api')

Vue.use(Vuex)

var defaultClient = MercantileApi.ApiClient.instance
var Bearer = defaultClient.authentications['Bearer']
Bearer.apiKey = "Token 88038846167fb0f0a84fdeb2713874c35a86a4c4"

var productApi = new MercantileApi.ProductApi();

export const store = new Vuex.Store({
    state: {
        isLoading: false,
        products: []
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product)
        }
    },
    getters: {
        products: state => state.products,
        productById: (state, id) => state.products.find(element => element.id == id)
    },
    actions: {
        fetchProducts(context) {
            productApi.productList({}, (error, data) => {
                if(error != null) return
                data.results.forEach(product => context.commit('addProduct', product))
            })
        }
    }
})