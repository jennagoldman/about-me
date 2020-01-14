// IMPORT MODULES under test here:
import isYes from '/../src/is-yes.js';

// import example from '../src/example.js';

const test = QUnit.test;

test('validate "yes" or "y" as true', function(assert) {
    // Arrange
    // Set up your parameters and expectations

    // Act 
    // Call the function you're testing and set the result to a const
    const shouldBeTrue = isYes('yes');
    const shouldAlsoBeTrue = isYes('y');
    // Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeTrue, true);
    assert.equal(shouldAlsoBeTrue, true);
});

test('invalidate "no" or "n" as false', function(assert) {
    // Arrange
    // Set up your parameters and expectations

    // Act 
    // Call the function you're testing and set the result to a const
    const shouldBeFalse = isYes('no');
    const shouldAlsoBeFalse = isYes('n');
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeFalse, false);
    assert.equal(shouldAlsoBeFalse, false);
});
