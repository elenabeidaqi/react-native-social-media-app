import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userInformationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  userInformation: {
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 19,
    color: '#000000',
    marginBottom :5
  },
  location: {
    fontFamily: 'Inter',
    color: '#79869F',
    lineHeight: 15,
    fontWeight: '400',
    fontSize: 14,
  },
  userPostInformation: {
    marginLeft: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: 3,
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  userPostStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    gap: 30,
    marginLeft: 24,
    paddingBottom: 20,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },
  userStatusText: {
    color: '#79869F',
  },
});
