import React, { Component } from 'react';
import { 
    View, 
    Text,
    Dimensions,
    Platform,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {AgreementStyle} from '../styles/AgreementStyle';
import {IMAGE} from '../constants/Image';
import CustomButton from '../component/CustomButton';
import { httpClient } from '../../core/HttpClient';

const { width } = Dimensions.get("window");
const height = width*1.57;

export default class AgreementScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        agree: true,
        showAlert: false,
        statement: ''
    };
  }

  async componentDidMount(){
    httpClient
    .get('/agreement')
    .then( response => {
      const result = response.data;
      // console.log(result);
      
      this.setState({
        statement: result
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  AbleAgreebox() {
    this.setState(
      {
        agree: !this.state.agree,
      },
      console.log(`agree STATE: ${this.state.agree}`)
    );
  }

  showAlert(){
      this.setState({
          showAlert: true
      }, console.log(`alert state: ${this.state.showAlert}`));
  }

  hideAlert(){
      this.setState({
          showAlert: false
      });
  }

  render() {
    // console.log(`statement:: ${this.state.statement}`)
    return (
      <View style={AgreementStyle.containers}>
          <View style={AgreementStyle.whiteboard}>
              <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 15}}>Terms and Conditions</Text>
              <ScrollView style={{backgroundColor: '#F8F8F8'}}>
              <Text>{this.state.statement}</Text>

              <View style={{alignItems: 'center', flexDirection: 'row', justifyContent:'center', padding: 30}}>
                  <TouchableOpacity onPress={() => this.AbleAgreebox()}>
                    {this.state.agree ?
                        <Image source={IMAGE.UNCHECK} style={AgreementStyle.checkbox}/>
                        :
                        <Image source={IMAGE.CHECKED} style={AgreementStyle.checkbox}/>
                    }
                  </TouchableOpacity>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>I AGREE</Text>
              </View>
              </ScrollView>
              <View style={{alignItems: 'center', flexDirection: 'row', justifyContent:'space-between', paddingTop: 20}}>
                <CustomButton title='PREVIOUS' onPress={() => this.props.navigation.goBack()}/>
                {this.state.agree ? 
                <View>
                    <CustomButton title='REGISTER' onPress={() => this.showAlert()}/> 
                    <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title="Please accept the terms and condition"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText=" OK "
                    confirmButtonColor="#A6B189"
                    onConfirmPressed={() => this.hideAlert()}
                    />
                    </View>
                : <CustomButton title='REGISTER' onPress={() => this.props.navigation.navigate("Register")}/>
                }
              </View>
          </View>
      </View>
    );
  }
}
