import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appContainer: {
    backgroundColor: 'blue',
    flex: 1
  },
  safeAreaView: {
    backgroundColor: 'pink'
  },
  header: {},
  container: {
    flex: 1,
    backgroundColor: '#121314'
  },
  headerContainer: {
    height: 100,
    backgroundColor: 'black',
    borderBottomWidth: 0
  },
  headerIcon: {
    color: 'white'
  },
  scrollViewContainer: {
    flex: 5,
    backgroundColor: '#121314'
  },
  accordion: {
    flex: 1,
    backgroundColor: '#121314'
  },
  detailsIconWrapper: {
    height: 45,
    width: 60,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 9,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 20
  },
  sectionHeaderDetailsIcon: {
    color: '#EAEAEA',
    fontWeight: 'bold'
  },
  tabBarIcon: {
    marginBottom: -5
  },
  notificationsContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  googleSearchModal: {
    marginTop: 70,
    marginBottom: 400,
  },
  googleSearchModalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10
  }
});
