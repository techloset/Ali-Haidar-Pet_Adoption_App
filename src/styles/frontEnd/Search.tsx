import {StyleSheet} from 'react-native';
import { FONTS } from '../../constants/fonts/AllFonts';

export const searchSt = StyleSheet.create({
  input: {
    marginTop: 60,
    width: 270,
    marginLeft: 22,
    height: 48,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
  },
  searchB: {
    position: 'relative',
    width: 80,
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    left: 260,
    top: 52,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  tabIconFocused: {
    backgroundColor: 'black',
  },
  tabIconUnfocused: {
    backgroundColor: 'transparent',
  },
  scrollImage: {
    marginTop: 79,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingLeft: 22,
    marginBottom:20,
    height: 31,
  },
  mar: {
    marginHorizontal: 7,
  },
  co: {
    color: 'black',
  },
  focusSlider: {
    width: 63,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6A530',
    color: 'black',
    borderRadius: 13,
  },
  unFocus: {
    backgroundColor: 'transparent',
  },
  focusText: {
    color: 'white',
  },
  unFocusText: {
    color: 'black',
  },
  MainContainer: {
    marginTop:30,
    marginRight: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  mainImg: {
    position: 'relative',
    left: 20,
    zIndex: 1,
  },

  data: {
    position: 'absolute',
    left: 170,
    top: 23,
    paddingLeft: 60,
    width: 206,
    height: 126,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  heding: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom:5,
    fontFamily:FONTS.SemiBold,
    color:'#101C1D'

  },

  locator: {
    marginTop:5,
    display: 'flex',
    flexDirection: 'row',
  },locatorImg:{
  paddingLeft:40,

},heartSty:{
  display:'flex',
  flexDirection: 'row',
  marginTop:5,
  justifyContent:'space-between',
  paddingRight:22,
}
});
