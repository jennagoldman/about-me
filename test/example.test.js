// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumbers.js';
const test = QUnit.test;

test('should be equal, resulting in 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeEqual = compareNumbers(7, 7);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeEqual, 0);
});

test('should be less than, resulting in -1', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    // ACT - Call the function you're testing and set the result to a const
    const shouldBeLessThan = compareNumbers(3, 6);

    // ASSERT - Make assertions about what is expected valid result
    assert.equal(shouldBeLessThan, -1);
});

test('should be greater than, resulting in 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    // ACT - Call the function you're testing and set the result to a const
    const shouldBeGreaterThan = compareNumbers(8, 2);

    // ASSERT - Make assertions about what is expected valid result
    assert.equal(shouldBeGreaterThan, 1);
});