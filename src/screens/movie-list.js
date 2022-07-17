import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	FlatList,
	ImageBackground,
	ActivityIndicator,
} from 'react-native'
import axios from 'axios'
import { ALL_API_URL } from '../api/api'
import { RFPercentage } from 'react-native-responsive-fontsize'
import {
	widthPercentageToDP,
	heightPercentageToDP,
} from 'react-native-responsive-screen'
import colors from '../styles/colors'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { navigationScreen } from '../constant/constant'
import { movieDetailMockList } from '../constant/constant'
export default function MovieList() {
	const itemBackground = require('../../assets/images/all-movie-background.png')
	const [movieList, setMovieList] = useState(null)
	const nav = useNavigation()
	const getAllMovie = async () => {
		await axios.get(ALL_API_URL).then((data) => {
			const movieList = data.data?.results.map((item, index) => {
				return {
					...item,
					...movieDetailMockList[index],
				}
			})
			setMovieList(movieList)
			// data.data?.results.forEach((item, index) => {
			// 	getMovieIdmbDetail(item.title, data.data?.results, index)
			// })
		})
	}

	// ---MAXIMUM 100 REQUEST SO CAN'T NOT USE THIS, SO LET USE THE CONSTANT
	// const getMovieIdmbDetail = async (item, data, index) => {
	// 	await axios.get(BASE_IDMB_SEARCH + item).then((dataIdmb) => {
	// 		const newItem = { ...dataIdmb?.data?.results[0], ...data[index] }

	// 		// data.splice(index, 1, newItem)
	// 		// setMovieList(data)
	// 	})
	// }
	useEffect(() => {
		getAllMovie()
	}, [])
	const navToDetail = (movieDetail) => {
		nav.navigate(navigationScreen.detail, {
			movieDetail: movieDetail,
		})
	}

	const flatListItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navToDetail(item)
				}}
				key={(item) => {
					item.director.toString() + Math.random().toString()
				}}
			>
				<ImageBackground
					//can't not load the image
					source={{ uri: item.image }}
					style={{
						marginBottom:
							index !== Object.values(item).length ? widthPercentageToDP(2) : 0,
						// width: widthPercentageToDP(100),
						height: heightPercentageToDP(16),
						padding: widthPercentageToDP(2),
						justifyContent: 'space-between',
					}}
					imageStyle={{ borderRadius: widthPercentageToDP(2) }}
				>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.releaseDate}>
						{moment(item.release_date).format('MMMM Do YYYY')}
					</Text>
				</ImageBackground>
			</TouchableOpacity>
		)
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textHeader}>Star Wars Movie List</Text>
			{movieList === null ? (
				<>
					<View>
						<ActivityIndicator size={'small'} />
					</View>
				</>
			) : (
				<FlatList
					keyExtractor={(item) => {
						item.director.toString() + Math.random().toString()
					}}
					key={(item) => {
						item.director.toString() + Math.random().toString()
					}}
					data={movieList}
					renderItem={flatListItem}
				/>
			)}
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: 16,
		flex: 1,
	},
	textHeader: {
		fontSize: RFPercentage(4),
		fontWeight: 'bold',
	},

	title: {
		fontSize: 24,
		color: colors.white,
		fontWeight: 'bold',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	releaseDate: {
		color: colors.white,
		fontSize: 16,
		fontWeight: '600',
	},
})
