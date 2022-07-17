import React, { useState, useEffect } from 'react'
import {
	ViewProps,
	TextProps,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	FlatList,
	Image,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import ArrowBack from 'react-native-vector-icons/FontAwesome'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import colors from '../styles/colors'
export default function CharacterDetail() {
	const { params } = useRoute()
	const itemBackground = require('../../assets/images/all-movie-background.png')
	console.log('character detail', params.characterDetail)
	const nav = useNavigation()
	const renderCharacterItem = (type, detail) => {
		return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginVertical: heightPercentageToDP(2),
				}}
			>
				<Text
					style={{
						fontSize: 16,
						fontStyle: 'italic',
						color: colors.grey,
					}}
				>
					{type}
				</Text>
				<Text
					style={{
						fontSize: 18,
						fontWeight: 'bold',
					}}
				>
					{detail}
				</Text>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					nav.goBack()
				}}
			>
				<ArrowBack name="arrow-left" size={RFPercentage(4)} />
			</TouchableOpacity>

			<View style={styles.avatar} />
			<Text style={styles.name}>{params.characterDetail.name}</Text>
			{renderCharacterItem('Height', params.characterDetail.height)}
			{renderCharacterItem('Gender', params.characterDetail.gender)}
			{renderCharacterItem('Date of birth', params.characterDetail.birth_year)}
			{renderCharacterItem('Hair Color', params.characterDetail.hair_color)}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	name: {
		alignSelf: 'center',
		marginTop: 16,
		fontWeight: 'bold',
		fontSize: 24,
	},
	avatar: {
		height: heightPercentageToDP(20),
		width: heightPercentageToDP(20),
		borderRadius: heightPercentageToDP(10),
		backgroundColor: colors.grey,
		alignSelf: 'center',
	},
})
