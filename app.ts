window.onload = function () {

    let checkFirstName: boolean = false;
    let checkLastName: boolean = false;
    let emailCorrect: boolean = true;
    let emailEmpty: boolean = true;
    let newsLetterSet: boolean = false;

    //hide the default-hided fields
    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    checkSubmitBtn();

    //check all input fields
    $("#firstName").on("input", function () {
        if (!$("#firstName").val()) {
            $("#firstNameMandatory").show();
            checkFirstName = false;
        } else {
            $("#firstNameMandatory").hide();
            checkFirstName = true;
        }
        checkSubmitBtn();
    });

    $("#lastName").on("input", function () {
        if (!$("#lastName").val()) {
            $("#lastNameMandatory").show();
            checkLastName = false;
        } else {
            $("#lastNameMandatory").hide();
            checkLastName = true;
        }
        checkSubmitBtn();
    });

    $("#email").on("input", function () {
        if (!$("#email").val()) {
            emailEmpty = true;
        } else {
            emailEmpty = false;
        }
        checkEmail();
    });

    $("#mediaChannelSelect").on("change", function () {
        if ($("#mediaChannelSelect").find(":selected").text() === "Other") {
            $("#otherMediaChannel").show();
        } else {
            $("#otherMediaChannel").hide();
        }
        checkSubmitBtn();
    });

    $("#newsletter").click(function () {
        if ($("#newsletter").is(":checked")) {
            newsLetterSet = true;
        } else {
            newsLetterSet = false;
        }
        checkEmail();
    });

    function checkSubmitBtn() {
        if (checkFirstName && checkLastName && emailCorrect && !emailEmpty) {
            $(":submit").prop("disabled", false);
        } else {
            $(":submit").prop("disabled", true);
        }
    }

    function checkEmail() {
        if (newsLetterSet && emailEmpty) {
            //newsletter checkbox is checked but email-field is empty
            $("#emailMandatory").show();
            emailCorrect = false;
        } else if (newsLetterSet && !emailEmpty) {
            //newsletter checkbox is checked but email-field is wrong format
            $("#emailMandatory").hide();
            emailCorrect = true;
        } else if (!newsLetterSet) {
            //newsletter checkbox is not checked
            $("#emailMandatory").hide();
            emailCorrect = true;
        }
        checkSubmitBtn();
    }
}