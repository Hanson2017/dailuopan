import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Icomoon';
import stylesList from '../../../css/listData';
import Theme from '../../../util/theme';
module.exports = {
    renderItemR({ item, index }) {
        let navigation = this.props.navigation;
        return (
            <View style={(item.flmllist.length > 0) && versionStatus != 1 ? stylesList.itemRow : stylesList.itemRowNone} key={index}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', }}
                    onPress={() => { navigation.navigate('Detail', { id: item.id_dlp, platName: item.plat_name }) }}

                >
                    <Text style={[stylesList.tdID, stylesList.headerRowText]}></Text>
                    <Text style={[stylesList.tdName, stylesList.headerRowText]}></Text>
                    <View style={[stylesList.tdUp, { width: Theme.screenWidth - 170 }]}>
                        <Text style={[stylesList.C2D3640, { width: 90, paddingLeft: 30 }]}>{item.zs_76676}</Text>
                        <Icon name={item.changnum >= 0 ? 'up' : 'down'} size={12} color={item.changnum >= 0 ? '#ff0063' : '#009963'} />
                    </View>

                </TouchableOpacity>
            </View>
        )
    },
    ListHeaderComponentR() {
        let listTitle = [
            { title: '76676指数', width: Theme.screenWidth - 170 },
        ]
        return (
            <View style={stylesList.headerRow}>
                <Text style={[stylesList.tdID, stylesList.headerRowText]}></Text>
                <Text style={[stylesList.tdName, stylesList.headerRowText]}></Text>
                {listTitle.map((text, i) => {
                    let width = text.width ? text.width : 85
                    return (
                        <Text style={[stylesList.headerRowText, { width: width, paddingLeft: 30 }]} key={i}>{text.title}</Text>
                    )
                })}
            </View>
        )

    }

}
