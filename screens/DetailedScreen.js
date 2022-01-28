import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/colors';

const DetailedScreen = ({ route, navigation }) => {

	let item = route.params;
	return (
		<View style={styles.card}>
			<View>
				{/* Pending to add onPress to goBack() */}
				<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
					<Icon name='chevron-left' size={24} color={colors.Gray} />
				</TouchableOpacity>
				<Image
					source={item.bigImage}
					style={styles.imageBg}
				/>
				<View style={styles.infoCard}>
					<Text style={styles.titleText}>{item.title}</Text>
					<View style={{ flexDirection: 'row', marginTop: 8 }}>
						<Icon name='map-marker-alt' size={16} color={colors.White} />
						<Text style={styles.locationText}>{item.location}</Text>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.heartButton}>
				<Icon name={'heart'} size={28} color={colors.Orange} />
			</TouchableOpacity>
			<View style={styles.descriptionCard}>
				<Text style={styles.subTitleText}>Description</Text>
				<Text style={styles.descriptionText}>{item.description}</Text>
				<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
					<View style={styles.dataBlock}>
						<Text style={styles.subData}>PRICE</Text>
						<Text style={styles.orangeData}>${item.price}<Text style={styles.grayData}>/person</Text></Text>
					</View>
					<View style={styles.dataBlock}>
						<Text style={styles.subData}>RATING</Text>
						<Text style={styles.orangeData}>{item.rating}<Text style={styles.grayData}>/5</Text></Text>
					</View>
					<View style={styles.dataBlock}>
						<Text style={styles.subData}>DURATION</Text>
						<Text style={styles.orangeData}>{item.duration}<Text style={styles.grayData}> hours</Text></Text>
					</View>
				</View>
				<TouchableOpacity style={styles.bookButton}>
					<Text style={styles.bookText}>Book Now</Text>
				</TouchableOpacity>
			</View>
		</View >
	);
};

export default DetailedScreen;

const styles = StyleSheet.create({
	card: {
		flex: 1,
	},
	infoCard: {
		position: 'absolute',
		top: 520,
		marginLeft: 20,
	},
	backButton: {
		position: 'absolute',
		top: 64,
		left: 24,
		width: 128,
		height: 128,
		zIndex: 1000,
	},
	titleText: {
		fontSize: 32,
		lineHeight: 38,
		color: colors.White,
		zIndex: 1000,
		fontWeight: '700',
	},
	locationText: {
		fontSize: 16,
		lineHeight: 20,
		color: colors.White,
		marginLeft: 10
	},
	heartButton: {
		position: 'absolute',
		borderRadius: 100,
		backgroundColor: colors.White,
		alignItems: 'center',
		justifyContent: 'center',
		width: 64,
		height: 64,
		shadowColor: colors.Black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 6,
		right: 39,
		bottom: 334,
	},
	imageBg: {
		width: '100%',
		height: 662,
	},
	dataBlock: {
		marginHorizontal: 20
	},
	descriptionCard: {
		position: 'absolute',
		paddingHorizontal: 20,
		width: '100%',
		height: 376,
		alignItems: 'center',
		backgroundColor: colors.White,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		bottom: 0
	},
	subTitleText: {
		alignSelf: 'flex-start',
		fontSize: 24,
		lineHeight: 28,
		fontWeight: '700',
		color: colors.Black,
		marginTop: 30
	},
	descriptionText: {
		fontSize: 16,
		lineHeight: 19,
		fontWeight: '500',
		color: colors.Gray,
		marginVertical: 20,
	},
	orangeData: {
		fontSize: 24,
		lineHeight: 28,
		color: colors.Orange,
		fontWeight: '700',
		marginBottom: 34
	},
	grayData: {
		fontSize: 14,
		color: colors.Gray,
	},
	subData: {
		fontSize: 12,
		lineHeight: 14,
		color: colors.Gray,
		marginBottom: 6
	},
	bookButton: {
		width: '100%',
		height: 54,
		borderRadius: 10,
		backgroundColor: colors.Orange,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bookText: {
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '700',
		color: colors.White,
	}
});
