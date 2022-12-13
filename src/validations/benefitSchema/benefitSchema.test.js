import benefitSchema from './benefitSchema';

test('test benefitSchema', () => {
  expect(benefitSchema().buttonlabel.required.value).toBe(true);
});
