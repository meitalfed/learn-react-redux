import expect from 'expect';
import courseReducer from './courseReducer';
import *  as actions from '../actions/courseActions';


describe('Course Reducer', () => {
  describe('when passed CREATE_COURSE_SUCCESS', () => {
    it('adds a course', () => {
      //arrange
      const initialState = [
        { title: 'A' },
        { title: 'B' }
      ];

      const newCourse = { title: 'C' };

      const action = actions.createCoursesSuccess(newCourse);

      //act
      const newState = courseReducer(initialState, action);

      //assert
      expect(newState.length).toEqual(3);
      expect(newState[0].title).toEqual('A');
      expect(newState[1].title).toEqual('B');
      expect(newState[2].title).toEqual('C');
    });
  });

  describe('when passed UPDATE_COURSE_SUCCESS', () => {
    it('updates a course', () => {
      //arrange
      const initialState = [
        { id: 'A', title: 'A' },
        { id: 'B', title: 'B' },
        { id: 'C', title: 'C' }
      ];

      const course = { id: 'B', title: 'New Title' };
      const action = actions.updateCoursesSuccess(course);

      //act
      const newState = courseReducer(initialState, action);
      const updatedCourse = newState.find(c => c.id === course.id);
      const untouchedCourse = newState.find(c => c.id === 'A');

      //assert
      expect(updatedCourse.title).toEqual('New Title');
      expect(untouchedCourse.title).toEqual('A');
      expect(newState.length).toEqual(3);
    });
  });
});
