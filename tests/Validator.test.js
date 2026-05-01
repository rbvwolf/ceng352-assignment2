const Validator = require('../src/Validator');

describe('Create New Account - Validation Tests', () => {
    let validator;

    // SETUP: Create new instance for each test
    beforeEach(() => {
        validator = new Validator();
    });

    // TEARDOWN: Clean up before each test
    afterEach(() => {
        validator = null;
    });

    // --- EQUIVALENCE PARTITIONING (EP) TESTS - NAME ---
    test('1. EP - Valid first name should pass', () => {
        expect(validator.validateName('Yiğit Mert')).toBe(true);
    });

    test('2. EP - Empty name should fail', () => {
        expect(validator.validateName('')).toBe(false);
    });

    test('3. EP - Name with numbers should fail', () => {
        expect(validator.validateName('Ceyhun123')).toBe(false);
    });

    //////////////////////////////

    // --- EQUIVALENCE PARTITIONING (EP) TESTS - EMAIL ---
    test('4. EP - Valid email format should pass', () => {
        expect(validator.validateEmail('ceyhun@trezmikis.com')).toBe(true);
    });

    test('5. EP - Invalid email without @ symbol should fail', () => {
        expect(validator.validateEmail('trezmikis.com')).toBe(false);
    });

    test('6. EP - Empty email should fail', () => {
        expect(validator.validateEmail('')).toBe(false);
    });
    
    //////////////////////////////

    // --- EQUIVALENCE PARTITIONING (EP) TESTS - DATE OF BIRTH (dd/mm/yyyy) ---
    test('7. EP - Valid Date of Birth should pass', () => {
        expect(validator.validateDateOfBirth('09/05/2005')).toBe(true);
    });

    test('8. EP - Invalid Date of Birth format (yyyy-mm-dd) should fail', () => {
        expect(validator.validateDateOfBirth('2005-01-01')).toBe(false);
    });

    test('9. EP - Invalid day in Date of Birth (32nd day) should fail', () => {
        expect(validator.validateDateOfBirth('32/05/2000')).toBe(false);
    });

    test('10. EP - Invalid month in Date of Birth (13th month) should fail', () => {
        expect(validator.validateDateOfBirth('15/13/2000')).toBe(false);
    });

    //////////////////////////////

    // --- EQUIVALENCE PARTITIONING (EP) TESTS - PASSWORD ---
    test('11. EP - Valid passwords (e.g. 13 chars) that match should pass', () => {
        expect(validator.validatePassword('CokGizliSifre', 'CokGizliSifre')).toBe(true);
    });

    test('12. EP - Passwords that meet length requirement but do not match should fail', () => {
        expect(validator.validatePassword('GizliSifre1', 'GizliSifre2')).toBe(false);
    });

    test('13. EP - Case sensitivity: Passwords differing only by case should fail', () => {
        expect(validator.validatePassword('sifre123', 'Sifre123')).toBe(false);
    });

    test('14. EP - Passwords below length requirement AND do not match should fail', () => {
        expect(validator.validatePassword('12345', '54321')).toBe(false);
    });

    test('15. EP - Both password fields empty should fail', () => {
        expect(validator.validatePassword('', '')).toBe(false);
    });

    test('16. EP - Password filled but confirmPassword empty should fail', () => {
        expect(validator.validatePassword('12345678', '')).toBe(false);
    });

    test('17. EP - Password empty but confirmPassword filled should fail', () => {
        expect(validator.validatePassword('', '12345678')).toBe(false);
    });

    test('18. EP - Null inputs should fail', () => {
        expect(validator.validatePassword(null, null)).toBe(false);
    });

    test('19. EP - Undefined inputs should fail', () => {
        expect(validator.validatePassword(undefined, undefined)).toBe(false);
    });

    test('20. EP - Only one input provided (missing argument) should fail', () => {
        // İkinci parametreyi hiç göndermeme durumu
        expect(validator.validatePassword('12345678')).toBe(false);
    });
   
    //////////////////////////////

    //BVA TESTS FOR PASSWORD (GREATER OR EQUAL TO 8)

    test('21. BVA - Password length exactly 7 chars (Below Boundary) should fail', () => {
        expect(validator.validatePassword('1234567', '1234567')).toBe(false);
    });

    test('22. BVA - Password length exactly 8 chars (On Boundary) should pass', () => {
        expect(validator.validatePassword('12345678', '12345678')).toBe(true);
    });

    test('23. BVA - Password length exactly 9 chars (Above Boundary) should pass', () => {
        expect(validator.validatePassword('123456789', '123456789')).toBe(true);
    });

    // --- DATE OF BIRTH (BVA & EP) ---

    test('24. BVA - Date of Birth with day 00 (Below boundary) should fail', () => {
        expect(validator.validateDateOfBirth('00/05/2000')).toBe(false);
    });

    test('25. BVA - Date of Birth with month 00 (Below boundary) should fail', () => {
        expect(validator.validateDateOfBirth('15/00/2000')).toBe(false);
    });

});