// Global variable 
const email_regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
const phone_regex = /^[0-9]{10,15}$/;
const name_regex = /^[a-zA-Z]+$/;
const address_regex = /^[0-9a-zA-Z]+$/;
const aadhar_regex = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
const pan_regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
const employee_regex = /[A-Z]{3}[0-9]{4}/;
const password_regex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const date_regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;


// Registeration form jQuery code

$('#registrationForm .text-danger').hide();
$('.form_submission').hide();

$('#registrationForm').submit(function(){
    let emailValue = $('#email').val();

    // validation for email
    if (!email_regex.test(emailValue) || emailValue.length == 0) {
        $('#email_error').show();
    } else {
        $('#email_error').hide();
    }

    let passwordValue = $('#password').val();
    // let confirmPasswordValue = $('#confirm_password').val();

    if (!password_regex.test(passwordValue) || passwordValue.length < 8) {
        //validation for password
        $('#password_error').show();
        $('#password_error').text('Password should contain atleast 8 characters');
    } else { 
        $('#password_error').hide();
    }

    let fnameValue = $('#fname').val();
    let lnameValue = $('#lname').val();

    if (!name_regex.test(fnameValue) || fnameValue.length == 0) {
        $('#fname_error').show();
    } else {
        $('#fname_error').hide();
    }

    if (!name_regex.test(lnameValue)) {
        $('#lname_error').show();
    } else {
        $('#lname_error').hide();
    }
});

$('.input-group-append').click(function() {
    let pswd = $(this).parent('.input-group').find('#password');
    pswd.attr('type', pswd.attr('type') === 'password' ? 'text' : 'password');
});

// Login form jQuery code

$('#loginForm .text-danger').hide();

$('#loginForm').submit(function() {
    let employeeValue = $('#employee-id').val();

    // validation for employee
    if (!employee_regex.test(employeeValue) || employeeValue.length == 0) {
        $('#employee_id_error').show();
    } else {
        $('#employee_id_error').hide();
    }

    let passwordValue = $('#password').val();

    // validation for password
    if (!password_regex.test(passwordValue) || passwordValue.length <= 8) {
        $('#password_error').show();
        $('#password_error').text('Password should contain atleast 8 characters');
    } else {
        $('#password_error').hide();
    }
});

// Forgot password form jQuery code

$('#forgotForm .text-danger').hide();

$('#forgotForm').submit(function() {
    let emailValue = $('#email').val();

    if (!email_regex.test(emailValue) || emailValue.length == 0) {
        $('#email_error').show();
    } else {
        $('#email_error').hide();
    }
});


// Reset Password form jQuery code

$('#resetForm .text-danger').hide();


// Profile information form validation jQuery code

$('#profile_info .text-danger').hide();

// Profile information form jQuery code

$('#pro-info').click(function() {
    $('.profile-info').fadeIn();
});

$('.close-btn').click(function() {
    $('.profile-info').fadeOut();
});

// Profile information form validation jQuery code

$('#profile_info .text-danger').hide();

$('#profile_info').submit(function() {
    let fnameValue = $('#fname').val();
    let lnameValue = $('#lname').val();

    if (!name_regex.test(fnameValue) || fnameValue.length == 0) {
        $('#fname_error').show();
    } else {
        $('#fname_error').hide();
    }

    if (!name_regex.test(lnameValue)) {
        $('#lname_error').show();
    } else {
        $('#lname_error').hide();
    }

    let emailValue = $('#email').val();

    if (!email_regex.test(emailValue) || emailValue.length == 0) {
        $('#email_error').show();
    } else {
        $('#email_error').hide();
    }

    let phoneValue = $('#phone1').val();

    if (!phone_regex.test(phoneValue) || phoneValue.length < 9) {
        $('.phone_error').show();
    } else {
        $('.phone_error').hide();
    }

    let addressValue = $('#address').val();

    if (!address_regex.test(addressValue)) {
        $('#address_error').show();
    } else {
        $('#address_error').hide();
    }
});

// Profile information form jQuery code

$('.pre-info').click(function() {
    $('.personal-inform').fadeIn();
});

$('.close-btn').click(function() {
    $('.personal-inform').fadeOut();
});

$('#personal_inform .text-danger').hide();

$('#personal_inform').submit(function() {
    let phoneValue = $('#phone2').val();

    if (!phone_regex.test(phoneValue) || phoneValue.length < 9) {
        $('.phone_error').show();
    } else {
        $('.phone_error').hide();
    }
});

// Age validation javascript function

function ageValidation(dob){
    let getDobValue = dob.split('-');
    let year = getDobValue[0];
    let month = getDobValue[1];
    let day = getDobValue[2];
    var age = 18;

    var mydate = new Date();
    mydate.setFullYear(year, month-1, day);

    var currdate = new Date();
    var setDate = new Date();         
    setDate.setFullYear(mydate.getFullYear() + age, month-1, day);

    if ((currdate - setDate) > 0){
        $('.dob_error').text('Your age should be above 18');
    } else {
        $('.dob_error').show();
    }
}

// Profile information form jQuery code

$('#emergence').click(function() {
    $('.emergency-contact').fadeIn();
});

$('.close-btn').click(function() {
    $('.emergency-contact').fadeOut();
});

// Profile information form validation jQuery code

$('#emergency-contact .text-danger').hide();

$('#emergency-contact').submit(function() {
    let pnameValue = $('#pname').val();

    if (!name_regex.test(pnameValue) || pnameValue.length == 0) {
        $('#pname_error').show();
    } else {
        $('#pname_error').hide();
    }

    let relationValue1 = $('#relation_1').val();

    if (!name_regex.test(relationValue1) || relationValue1.length == 0) {
        $('#relation_1_error').show();
    } else {
        $('#relation_1_error').hide();
    }

    let relationValue2 = $('#relation_2').val();

    if (!name_regex.test(relationValue2) || relationValue2.length == 0) {
        $('#relation_2_error').show();
    } else {
        $('#relation_2_error').hide();
    }

    let prePhoneValue1 = $('#pre_phone_1').val();

    if (!phone_regex.test(prePhoneValue1) || prePhoneValue1.length < 9) {
        $('.pre_phone_1_error').show();
    } else {
        $('.pre_phone_1_error').hide();
    }

    let prePhoneValue2 = $('#pre_phone_2').val();

    if (!phone_regex.test(prePhoneValue2) || prePhoneValue2.length < 9) {
        $('.pre_phone_2_error').show();
    } else {
        $('.pre_phone_2_error').hide();
    }

    let snameValue = $('#sname').val();

    if (!name_regex.test(snameValue) || snameValue.length == 0) {
        $('#sname_error').show();
    } else {
        $('#sname_error').hide();
    }

    let secPhoneValue1 = $('#sec_phone_1').val();

    if (!phone_regex.test(secPhoneValue1) || secPhoneValue1.length < 9) {
        $('.sec_phone_1_error').show();
    } else {
        $('.sec_phone_1_error').hide();
    }

    let secPhoneValue2 = $('#sec_phone_2').val();

    if (!phone_regex.test(secPhoneValue2) || secPhoneValue2.length < 9) {
        $('.sec_phone_2_error').show();
    } else {
        $('.sec_phone_2_error').hide();
    }
});


// Bank information form jQuery code

$('#bank_info').click(function() {
    $('.bank_inform').fadeIn();
});

$('.close-btn').click(function() {
    $('.bank_inform').fadeOut();
});

// Bank information form validation jQuery code

$('#bank_inform .text-danger').hide();

$('#bank_inform').submit(function() {
    let bankNameValue = $('#bank-name').val();
    let bankAccountValue = $('#bank-account').val();

    if (!name_regex.test(bankNameValue) || bankNameValue.length == 0) {
        $('#bank_name_error').show();
    } else {
        $('#bank_name_error').hide();
    }

    if (bankAccountValue.length == 0) {
        $('#bank_account_error').show();
    } else {
        $('#bank_account_error').hide();
    }
});

// Personal Document form jQuery code

$('#doc_info').click(function() {
    $('.doc-inform').fadeIn();
});

$('.close-btn').click(function() {
    $('.doc-inform').fadeOut();
});

// Personal Document form validation jQuery code

$('#doc-inform .text-danger').hide();

$('#doc-inform').submit(function() {

    let aadharValue = $('#aadhar').val();
    let panValue = $('#pan').val().toUpperCase();

    if (!aadhar_regex.test(aadharValue)) {
        $('#aadhar_error').show();
    } else {
        if (aadharValue.length < 0) {
            $('#aadhar_error').show();
            $('#aadhar_error').text('Aadhar card should contain atleast 12 digits');
        } else if (aadharValue.length == 12) {
            $('#aadhar_error').hide();
        } else {
            $('#aadhar_error').hide();
        }
    }

    if (!pan_regex.test(panValue)) {
        $('#pan_error').show();
    } else {
        if (panValue.length < 0) {
            $('#pan_error').show();
            $('#pan_error').text('Pan card should contain atleast 10 digits');
        } else if (panValue.length == 10) {
            $('#pan_error').hide();
        } else {
            $('#pan_error').hide();
        }
    }
});


// Educational information form jQuery code

$('#edu_info').click(function() {
    $('.education_info').fadeIn();
});

$('.close-btn').click(function() {
    $('.education_info').fadeOut();
});

// Educational information form validation jQuery code

$('#education_info .text-danger').hide();


// Experience information form jQuery code

$('#exp_info').click(function() {
    $('.experience_info').fadeIn();
});

$('.close-btn').click(function() {
    $('.experience_info').fadeOut();
});

// Experience information form validation jQuery code

$('#experience_info .text-danger').hide();


// Leave Apply form jQuery code

$('#apply-for-leave').click(function() {
    $('.apply-leave').fadeIn();
});

$('.close-btn').click(function() {
    $('.apply-leave').fadeOut();
});

const handlePrint = () => {
    var actContents = document.body.innerHTML;
    document.body.innerHTML = actContents;
    window.print();
}