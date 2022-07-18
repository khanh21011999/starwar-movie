import React from 'react'
import MovieList from '../movie-list'
import { shallow } from 'enzyme'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import MovieDetail from '../movie-detail'
import CharacterDetail from '../character-detail'
describe('Test movie l', () => {
	test('Test movie list', () => {
		const props = {}
		const tree = render(<MovieList {...props} />)
		expect(tree.toJSON()).toMatchSnapshot()
		// const testTouch = tree.getByRole('TouchableOpacity')
	   // fireEvent.press(testTouch)
		expect(tree.queryByTestId('header')).toBeTruthy()
	
	})

	// NOT WORK YET vector icon expo issue in 0.69
	// test('Movie Detail', () => {
	// 	const tree = render(<MovieDetail />)
	// 	expect(tree.toJSON()).toMatchSnapshot()
	// })
	// test('Character Detail', () => {
	// 	const tree = render(<CharacterDetail />)
	// 	expect(tree.toJSON()).toMatchSnapshot()
	// })
})
