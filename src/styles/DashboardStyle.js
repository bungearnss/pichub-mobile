
import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.51;

export const DashboardStyle = StyleSheet.create({
  containers: {
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 15,
  },
  headerText: {
    marginHorizontal: '10%',
    fontSize: 20,
    backgroundColor: '#FFF',
  },
  resultText: {
    marginLeft: '20%',
    fontSize: 20,
    backgroundColor: '#FFF',
  },
  listText: {
    width: width * 0.36,
    height: 30,
    margin: 1,
    padding: 1,
  },
  titleStyle: {
    fontSize: 10,
    color: '#FFF',
    marginTop: -4,
    marginLeft: -7,
  },
  descriptionStyle: {
    fontSize: 15,
    color: '#FFF',
    marginTop: -5,
    marginLeft: -7,
  },
  listBox: {
    //backgroundColor: '#8CCDC1',
    marginTop: '2%',
    paddingTop: 5,
    paddingLeft: 20,
    width: width * 0.8,
    height: 50,
  },
  gridList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '5%',
  },
  buyList: {
    backgroundColor: '#8CCDC1',
    marginTop: '2%',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingBottom: '5%',
  },
  sellList: {
    backgroundColor: '#8CCDC1',
    marginTop: '2%',
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingBottom: '5%',
  },
});