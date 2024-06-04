import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 30,
    paddingRight: 17,
    paddingLeft: 17,
  },
  messageIcon: {
    backgroundColor: '#F3F7FA',
    padding: 12,
    borderRadius: 100,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#F35BAC',
    borderRadius: 50,
    width: 15,
    height: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    right: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inter',
  },
  userStoryContainer: {
    paddingHorizontal: 28,
    marginTop : 25
  },
});
