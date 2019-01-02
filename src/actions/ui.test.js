import {
  EXPANDED_LESSON_LIST, 
  expandLessonList, 
  COLLAPSE_LESSON_LIST, 
  collapseLessonList,
  TOOGLE_LESSON_LIST, 
  toogleLessonList} from './index';

describe('expandLessonList', () => {
    it('Should return the action', () => {
        const lessonListExpanded = true;
        const action = expandLessonList(lessonListExpanded);
        expect(action.type).toEqual(EXPANDED_LESSON_LIST);
        expect(action.lessonListExpanded).toEqual(lessonListExpanded);
    });
});

describe('collapseLessonList', () => {
    it('Should return the action', () => {
        const lessonListExpanded = false;
        const action = collapseLessonList(lessonListExpanded);
        expect(action.type).toEqual(COLLAPSE_LESSON_LIST);
        expect(action.lessonListExpanded).toEqual(lessonListExpanded);
    });
});

describe('toogleLessonList', () => {
  it('Should return the action', () => {
      const lessonListExpanded = !false;
      const action = toogleLessonList(lessonListExpanded);
      expect(action.type).toEqual(TOOGLE_LESSON_LIST);
      expect(action.lessonListExpanded).toEqual(lessonListExpanded);
  });
});
