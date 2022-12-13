import userSchema from './userSchema';

test('test userSchema', () => {
  expect(userSchema().isactive.required.value).toBe(true);
});
