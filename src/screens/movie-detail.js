import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	ImageBackground,
	ActivityIndicator,
	SafeAreaView,
} from 'react-native'
import axios from 'axios'
import {
	heightPercentageToDP,
	widthPercentageToDP,
} from 'react-native-responsive-screen'
import colors from '../styles/colors'
import moment from 'moment'
import StarIcon from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { navigationScreen } from '../constant/constant'
import ArrowBack from 'react-native-vector-icons/FontAwesome'
export default function MovieDetail() {
	const itemBackground = require('../../assets/images/all-movie-background.png')
	const { params } = useRoute()
	const nav = useNavigation()
	const [castItemDetail, setCastItemDetail] = useState([])
	console.log('movie detail', params.movieDetail)

	const loadPeople = () => {
		axios
			.all(params.movieDetail.characters.map((endpoint) => axios.get(endpoint)))
			.then((data) => {
				const onlyData = data.map((item) => {
					return item.data
				})

				setCastItemDetail(onlyData)
			})
	}

	useEffect(() => {
		loadPeople()
	}, [])

	onNavCharacterDetail = (characterDetail) => {
		nav.navigate(navigationScreen.characterDetail, {
			characterDetail: characterDetail,
		})
	}
	renderCastItem = (item, index) => {
		return (
			<TouchableOpacity
				style={{
					marginRight:
						index === castItemDetail.length ? 0 : widthPercentageToDP(2),
					alignItems: 'center',
				}}
				onPress={() => {
					onNavCharacterDetail(item)
				}}
				key={index}
			>
				<View style={styles.characterTextContainer}></View>
				<Text>{item.name}</Text>
			</TouchableOpacity>
		)
	}
	return (
		<SafeAreaView>
			<ScrollView>
				<ImageBackground
					source={{ uri: params.movieDetail.image }}
					style={styles.headerImage}
				>
					<TouchableOpacity
						onPress={() => {
							nav.goBack()
						}}
					>
						<ArrowBack
							name="arrow-left"
							size={RFPercentage(4)}
							color={colors.white}
						/>
					</TouchableOpacity>

					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<View>
							<Text style={styles.titleText}>{params.movieDetail.title}</Text>
							<Text style={styles.releaseDate}>
								Release date{' '}
								{moment(params.movieDetail.release_date).format('MMMM Do YYYY')}
							</Text>
						</View>
						<View style={styles.ratingContainer}>
							<Text style={styles.rating}>{params.movieDetail.imDb}</Text>
							<StarIcon
								name="star"
								color={colors.gold}
								size={RFPercentage(2)}
							/>
						</View>
					</View>
				</ImageBackground>
				<View style={{ padding: 16 }}>
					<Text style={styles.directedBy}>
						Directed by {params.movieDetail.director}
					</Text>
					<View>
						<Text style={styles.header}>The Characters</Text>
						{castItemDetail.length === 0 && (
							<ActivityIndicator size={'small'} />
						)}
					</View>
					<ScrollView showsHorizontalScrollIndicator={false} horizontal>
						{castItemDetail.map((item, index) => renderCastItem(item, index))}
					</ScrollView>
					<Text style={styles.header}>Story</Text>
					<Text>{params.movieDetail.opening_crawl}</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	headerImage: {
		padding: 16,
		height: heightPercentageToDP(40),
		justifyContent: 'space-between',
	},
	titleText: {
		color: colors.white,
		fontSize: 32,
		fontWeight: 'bold',
	},
	releaseDate: {
		color: colors.white,
		fontSize: 14,
		fontWeight: '400',
		fontStyle: 'italic',
	},
	header: {
		fontSize: 24,
		marginVertical: heightPercentageToDP(2),
		fontWeight: '600',
	},
	directedBy: {
		fontSize: 16,
		fontWeight: '600',
	},
	characterTextContainer: {
		height: heightPercentageToDP(10),
		width: heightPercentageToDP(10),
		backgroundColor: 'grey',
		borderRadius: heightPercentageToDP(10),
	},
	ratingContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	rating: {
		color: 'white',
		paddingRight: 4,
		fontWeight: 'bold',
		fontSize: 16,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
})
