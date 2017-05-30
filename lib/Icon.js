/**
 * Created by chengyong.lin on 17/5/30.
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default class ArrowIcon extends Component {
    constructor(){
        super();
        this.upperImg = require('./images/up-arrow.png');
        this.downImg = require('./images/down-arrow.png');
    }

    render(){
        let {direction, style} = this.props;
        let dirImg;
        if(direction === "upper"){
            dirImg = this.upperImg;
        }else {
            dirImg = this.downImg;
        }
        return(
            <Text style={[styles.default,style]}>
                <Image source={dirImg} style={{width:12, height:12, marginVertical:4}}/>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});