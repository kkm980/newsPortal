import validate from 'deep-email-validator';

async function isEmailValid(email: string) {
    const res = await validate({
        email:email,
        validateRegex: true,
        validateMx: true,
        validateTypo: true,
        validateDisposable: true,
        validateSMTP: false
    });
    return res;
};

export default isEmailValid;