jest.mock('@react-navigation/native', () => {
	return {
		useNavigation: () => {},
	}
})
jest.mock('react-native-vector-icons', () => {
	return 'Icon'
})
jest.mock()