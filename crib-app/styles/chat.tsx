import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  profilePictureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    marginVertical: 20,
    shadowColor: Colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
  profilePicture: {
		  width: 125,
		  height: 125,
			borderRadius: 100,
			resizeMode: 'cover',
	  },
  chatContainer: {
		  flex: 1,
		  justifyContent: 'space-between',
		  flexDirection: 'column',
	  },
	  chatMessagesContainer: {
		  flex: 1,
		  justifyContent: 'flex-start',
	  },
	  chatBottomContainer: {
		  flex: 0,
	  },
	  chatInputContainer: {
		  width: '100%',
		  display: 'flex',
		  flexDirection: 'row',
		  paddingHorizontal: 20,
      paddingBottom: 20,
	  },
	  chatInput: {
		  width: '85%',
   		display: 'flex',
   		flexDirection: 'row',
   		alignItems: 'center',
   		shadowColor: 'transparent',
   		padding: 10,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: 0,
  		shadowColor: Colors.veryLightGray,
  		shadowOffset: {
  			width: 0,
  			height: 5,
  		},
  		shadowOpacity: 1,
  		shadowRadius: 0,
      elevation: 8,
	  },
	  chatInputIconContainer: {
		  justifyContent: 'center',
		  alignItems: 'center',
		  width: '15%',
	  },
    chatInputIconButton: {
      paddingVertical: 15,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
	  chatMessageContainer: {
		  display: 'flex',
		  flexDirection: 'row',
		  alignItems: 'flex-end',
		  justifyContent: 'flex-start',
		  width: '75%',
		  marginVertical: 5,
	  },
	  chatMessageContainerRight: {
		  alignSelf: 'flex-end',
		  flexDirection: 'row-reverse',
	  },
	  chatMessagePictureContainer: {
		  width: '25%',
		  marginVertical: 5,
	  },
	  chatMessagePicture: {
		  width: 40,
		  height: 40,
	  },
	  chatMessageDescriptionContainer: {
		  maxWidth: '75%',
		  marginBottom: 5,
		  paddingHorizontal: 20,
		  paddingVertical: 10,
		  borderRadius: 10,
		  backgroundColor: Colors.white,
		  shadowColor: Colors.lightGray,
		  shadowOffset: {
			  width: 0,
			  height: 5,
		  },
		  shadowOpacity: 1,
		  shadowRadius: 0,
		  elevation: 1,
	  },
	  chatMessageDescriptionContainerRight: {
		  backgroundColor: Colors.orange,
		  shadowColor: Colors.darkOrange,
	  },
	  chatMessageDescription: {
		  width: 'auto',
		  fontSize: 16,
	  },
	  chatMessageDescriptionRight: {
		  color: Colors.white,
	  },
});

export default styles;
