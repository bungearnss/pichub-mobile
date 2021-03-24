import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import { List } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import { DashboardStyle } from '../../styles/DashboardStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const month = [
  { label: 'January', value: 'January' },
  { label: 'February', value: 'February' },
  { label: 'March', value: 'March' },
  { label: 'April', value: 'April' },
  { label: 'May', value: 'May' },
  { label: 'June', value: 'June' },
  { label: 'July', value: 'July' },
  { label: 'August', value: 'August' },
  { label: 'Sebtember', value: 'Sebtember' },
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
];

const history_january = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_february = [
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_march = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_april = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_may = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_june = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_july = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_august = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_sebtember = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_october = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_november = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];

const history_december = [
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'buy',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
  {
    type: 'sell',
    pic_name: 'asd',
    pic_size: '4000*4000',
    price: '3000 ฿',
  },
];
export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_follow: '3640 ต่อเดือน(เพิ่มขึ้น 13.02%)',
      data_sell: '65 ครั้ง',
      data_cash: '30000 บาท',
      data_buy: '10 ครั้ง',
      month: '',
      history: [],
    };
  }

  updateHistory() {
    if (this.state.month == 'January') {
      let arr = history_january.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'February') {
      let arr = history_february.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'March') {
      let arr = history_march.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'April') {
      let arr = history_april.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'May') {
      let arr = history_may.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'June') {
      let arr = history_june.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'July') {
      let arr = history_july.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'August') {
      let arr = history_august.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'Sebtember') {
      let arr = history_sebtember.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'October') {
      let arr = history_october.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'November') {
      let arr = history_november.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else if (this.state.month == 'December') {
      let arr = history_december.map((item, index) => {
        item.isSelected = false;
        return { ...item };
      });
      this.setState({ history: arr });
      console.log(`arr data: ${arr}`);
    } else {
      this.setState({ history: [] });
    }
  }
  render() {
    return (
      <View style={DashboardStyle.containers}>
        <Text style={[DashboardStyle.headerText, { marginTop: '20%' }]}>
          ยอดการเข้าถึง:
        </Text>
        <Text style={DashboardStyle.resultText}>{this.state.data_follow}</Text>
        <Text style={DashboardStyle.headerText}>จำนวนที่ขายได้:</Text>
        <Text style={DashboardStyle.resultText}>{this.state.data_sell}</Text>
        <Text style={DashboardStyle.headerText}>ยอดเงินที่ได้รับ:</Text>
        <Text style={DashboardStyle.resultText}>{this.state.data_cash}</Text>
        <Text style={DashboardStyle.headerText}>จำนวนที่ซื้อผลงาน:</Text>
        <Text style={DashboardStyle.resultText}>{this.state.data_buy}</Text>
        <Text
          style={[
            DashboardStyle.headerText,
            {
              height: 50,
              alignItems: 'center',
              marginBottom: '-12%',
            },
          ]}
        >
          History
        </Text>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          style={{ ...pickerSelectStyles }}
          placeholder={{
            label: 'Select a month',
            value: null,
          }}
          items={month}
          onValueChange={(value) => {
            this.setState({ month: value });
            this.updateHistory();
          }}
          value={this.state.month}
        />

        <ScrollView
          style={{
            marginHorizontal: '10%',
            marginTop: '2%',
            marginBottom: '5%',
            borderRadius: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {this.state.history.map((item) => (
            <SafeAreaView
              style={
                item.type === 'buy'
                  ? DashboardStyle.buyList
                  : DashboardStyle.sellList
              }
            >
              <List.Accordion
                style={DashboardStyle.listBox}
                title={item.type}
                titleStyle={{ color: '#FFF', fontSize: 20 }}
                left={(props) => (
                  <MaterialCommunityIcons
                    name='cash-usd'
                    size={Platform.OS === 'ios' ? 45 : 40}
                    color='#FFF'
                  />
                )}
              >
                <View style={DashboardStyle.gridList}>
                  <List.Item
                    style={[DashboardStyle.listText, { marginLeft: '-23%' }]}
                    title='Picture Name'
                    description={item.pic_name}
                    titleStyle={DashboardStyle.titleStyle}
                    descriptionStyle={DashboardStyle.descriptionStyle}
                  />
                  <List.Item
                    style={DashboardStyle.listText}
                    title='Picture Size'
                    description={item.pic_size}
                    titleStyle={DashboardStyle.titleStyle}
                    descriptionStyle={DashboardStyle.descriptionStyle}
                  />
                  <List.Item
                    style={[DashboardStyle.listText, { marginLeft: '-23%' }]}
                    title='Price'
                    description={item.price}
                    titleStyle={DashboardStyle.titleStyle}
                    descriptionStyle={DashboardStyle.descriptionStyle}
                  />
                </View>
              </List.Accordion>
            </SafeAreaView>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    height: 40,
    marginLeft: '30%',
    marginRight: '10%',
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#A6B189',
    color: '#FFF',
    textAlign: 'center',
  },
});
