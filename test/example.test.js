// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from './test/compareNumbers.js';
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
    const shouldBeLessThan = compareNumbers(5, 7);

    // ASSERT - Make assertions about what is expected valid result
    assert.equal(shouldBeLessThan, -1);
});

test('should be greater than, resulting in 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    // ACT - Call the function you're testing and set the result to a const
    const shouldBeGreaterThan = compareNumbers(8, 7);

    // ASSERT - Make assertions about what is expected valid result
    assert.equal(shouldBeGreaterThan, 1);
});

// STRETCH GOAL
// Actually test for invalid input. You should throw an error if either parameter is not a number. Consult the QUnit docs for how to test for an exception.
