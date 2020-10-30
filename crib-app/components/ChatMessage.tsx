import React, { PropTypes } from 'react'
import {
	TextInput,
	Button,
	Text,
	View,
	Image,
	ActivityIndicator,
	TouchableOpacity,
	  Dimensions,
} from 'react-native';

import mainStyles from '../styles/main';
import styles from '../styles/chat';

class ChatMessage extends React.Component {

	showPickedImage() {
		const { avatar } = this.props.user;

		return (
      <Image
  		source={ avatar }
  		style={[ styles.profilePicture, styles.chatMessagePicture ] }
  		/>
    )
	}

	render() {

		let navigateToProfile = () => {
			console.log("hi")
		}

		return (
				<View style={mainStyles.containerNoPadding}>
				{
					// if you, float right
					this.props.floatRight ? (
						<View style={[styles.chatMessageContainer, styles.chatMessageContainerRight]}>
							<View style={[styles.profilePictureContainer, styles.chatMessagePictureContainer]}>
								{ this.showPickedImage() }
							</View>
							<View style={[styles.chatMessageDescriptionContainer, styles.chatMessageDescriptionContainerRight]}>
								<Text style={[styles.chatMessageDescription, styles.chatMessageDescriptionRight]}>
									{ this.props.message.text }
								</Text>
							</View>
						</View>
					) : (
						// if other user, float left
						<View style={[styles.chatMessageContainer]}>
							<TouchableOpacity style={[styles.profilePictureContainer, styles.chatMessagePictureContainer]}
							onPress={navigateToProfile}>
								{ this.showPickedImage() }
							</TouchableOpacity>
							<View style={[styles.chatMessageDescriptionContainer]}>
								<Text style={[styles.chatMessageDescription]}>
									{ this.props.message.text }
								</Text>
							</View>
						</View>
					)
				}
				</View>
		)
	}
}

export default ChatMessage;
