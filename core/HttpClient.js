import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import axios from 'axios'
import join from 'url-join'

var isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config)=> {
    if (!isAbsoluteURLRegex.test(config.url)) {
        const jwtToken = await AsyncStorage.getItem("token")        
        if (jwtToken != null) {
            config.headers = { 'x-access-token': jwtToken }
        }

        //using cmd/ipconfig to find your endpoint to connect your server and react-native fontend
        config.url = join('http://192.168.101.189:3000', config.url); //SecureN wifi
        /*
        myplace wifi :: http://192.168.101.189:3000 
        SecureN wifi :: http://10.25.251.59:3000
        */
    }
    return config;
});

export const httpClient = axios