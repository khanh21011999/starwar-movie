import React from 'react'
import MovieList from '../movie-list'
import { enzyme } from 'enzyme'

describe('Test movie list', () => {
	const props = {}
	const wrapper = mount(<MovieList {...props} />)
	const instance = wrapper.instance()
	const state = {}
	test('Component', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
