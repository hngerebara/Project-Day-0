var jasmine = require("../app/library.js")

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
       expect(jasmine.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
     });

    it('should return [4, 6] for [6, 4]', function () {
       expect(jasmine.findMinMax([6, 4])).toEqual([4, 6]);
     });

    it('should return [15, 135] for [113,46,20,15,19,135,111]', function () {
       expect(jasmine.findMinMax([113,46,20,15,19,135,111])).toEqual([15, 135]);
     });

    it('should return [1,10] for [2,3,1,6,7,10,9]', function () {
       expect(jasmine.findMinMax([2,3,1,6,7,10,9])).toEqual([1,10]);
     });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
       expect(jasmine.findMinMax([4, 4, 4, 4])).toEqual([4]);
     });
    it('should return [10] for [10, 10, 10, 10]', function () {
       expect(jasmine.findMinMax([10, 10, 10, 10])).toEqual([10]);
     });

    it('should return [2] for [2, 2, 2, 2]', function () {
       expect(jasmine.findMinMax([2, 2, 2, 2])).toEqual([2]);
     });

    it('should return [80] for [80, 80, 80, 80]', function () {
       expect(jasmine.findMinMax([80, 80, 80, 80])).toEqual([80]);
     });
  });

});
